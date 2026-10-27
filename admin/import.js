(() => {
"use strict";
const $=id=>document.getElementById(id);
const storageKey="studio-cms-prototype-posts-v1";
let queue=[];
const slug=s=>(s||"post").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"post";
const clean=s=>String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
function scalar(value){
  let v=(value||"").trim();
  if(v.startsWith('"')&&v.endsWith('"')){try{return JSON.parse(v)}catch(e){return v.slice(1,-1)}}
  if(v.startsWith("'")&&v.endsWith("'"))return v.slice(1,-1).replace(/''/g,"'");
  return v.replace(/\s+#.*$/,"");
}
function parse(text,filename){
  const warnings=[],errors=[];
  const normalized=text.replace(/^\uFEFF/,"").replace(/\r\n?/g,"\n");
  let body=normalized,meta={};
  if(normalized.startsWith("---\n")){
    const end=normalized.indexOf("\n---\n",4);
    if(end<0){errors.push("Unclosed YAML front matter.");}
    else{
      const header=normalized.slice(4,end).split("\n");body=normalized.slice(end+5);
      let listKey=null;
      for(const line of header){
        if(!line.trim()||/^\s*#/.test(line))continue;
        const top=line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
        if(top){
          listKey=null;const key=top[1],value=top[2];
          if(value===""){meta[key]=[];listKey=key;}
          else if(/^\[.*\]$/.test(value))meta[key]=value.slice(1,-1).split(",").map(scalar).filter(Boolean);
          else meta[key]=scalar(value);
        }else if(listKey&&/^\s+-\s+/.test(line))meta[listKey].push(scalar(line.replace(/^\s+-\s+/,"")));
        else warnings.push("Unsupported YAML line: "+line.trim().slice(0,65));
      }
    }
  }else warnings.push("No YAML front matter; title inferred from filename.");
  const title=String(meta.title||filename.replace(/\.markdown?$|^\d{4}-\d{2}-\d{2}-/gi,"").replace(/[-_]/g," ")).trim();
  if(!title)errors.push("No usable title.");
  let date=String(meta.date||"").match(/\d{4}-\d{2}-\d{2}/)?.[0]||filename.match(/^\d{4}-\d{2}-\d{2}/)?.[0]||"";
  if(date&&!/^\d{4}-\d{2}-\d{2}$/.test(date))date="";
  if(!date)warnings.push("No valid post date; a new date will be assigned on export.");
  if(meta.permalink)warnings.push("WordPress permalink ignored; Jekyll generates its own URL.");
  if(/\[\/?(?:caption|gallery|embed|vc_|wp:)/i.test(body))warnings.push("WordPress shortcodes detected; check formatting.");
  if(/(?:https?:)?\/\/[^\s"'()]+\.(?:jpg|jpeg|png|webp|gif)/i.test(body)||/!\[[^\]]*\]\(/.test(body))warnings.push("Image references detected; verify links before publishing.");
  if(/<\/?(?:div|iframe|figure|script|style|img|p|span)\b/i.test(body))warnings.push("Embedded HTML detected; inspect article preview and safety.");
  if(body.length>900000)errors.push("Body too large for a CMS draft.");
  const categories=Array.isArray(meta.categories)?meta.categories:meta.categories?[meta.categories]:[];
  const tags=Array.isArray(meta.tags)?meta.tags:meta.tags?String(meta.tags).split(",").map(s=>s.trim()):[];
  return {title,body,description:String(meta.description||meta.excerpt||"").slice(0,400),category:String(categories[0]||meta.category||""),tags:tags.join(", "),image:String(meta.image||""),slug:slug(String(meta.slug||title)),date,warnings,errors,filename};
}
function render(){
  $("import-results").innerHTML=queue.length?queue.map((item,i)=>'<article class="import-row"><label><input type="checkbox" data-pick="'+i+'" '+(item.errors.length?"disabled":"checked")+'> <strong>'+clean(item.title)+'</strong></label><p class="import-note">'+clean(item.filename)+' · '+(item.date||"Date not found")+' · '+item.body.length+' characters</p>'+(item.errors.map(w=>'<p class="import-error">✕ '+clean(w)+'</p>').join(""))+(item.warnings.map(w=>'<p class="import-warning">⚠ '+clean(w)+'</p>').join(""))+'<details><summary>Inspect imported content</summary><pre>'+clean(item.body.slice(0,6000))+(item.body.length>6000?"\n… (preview truncated)":"")+'</pre></details></article>').join(""):"<p>No files selected.</p>";
  $("import-selected").disabled=!queue.some(x=>!x.errors.length);
}
$("import-files").addEventListener("change",async e=>{
  const files=Array.from(e.target.files||[]);
  $("import-status").textContent="";
  if(files.length>5){$("import-status").textContent="Choose at most five files per test batch.";return}
  queue=[];
  for(const file of files){
    if(!/\.(md|markdown)$/i.test(file.name)){queue.push({filename:file.name,title:file.name,body:"",date:"",warnings:[],errors:["Not a Markdown file."]});continue}
    if(file.size>1000000){queue.push({filename:file.name,title:file.name,body:"",date:"",warnings:[],errors:["File exceeds 1 MB."]});continue}
    queue.push(parse(await file.text(),file.name));
  }
  render();
});
$("clear-import").addEventListener("click",()=>{queue=[];$("import-files").value="";$("import-status").textContent="";render()});
$("import-selected").addEventListener("click",()=>{
  const picks=Array.from(document.querySelectorAll("[data-pick]:checked")).map(x=>queue[Number(x.dataset.pick)]).filter(x=>!x.errors.length);
  if(!picks.length)return;
  let posts;
  try{const raw=localStorage.getItem(storageKey);posts=raw?JSON.parse(raw):[];if(!Array.isArray(posts))throw Error("Invalid draft storage");}
  catch(e){$("import-status").textContent="Cannot read existing drafts. Nothing imported.";return}
  const existing=new Set(posts.map(p=>slug(p.title||"")+"|"+(p.siteId||"studio-journal")));
  const additions=[];
  for(const item of picks){
    const key=slug(item.title)+"|studio-journal";
    if(existing.has(key))continue;
    existing.add(key);
    additions.push({id:"import-"+Date.now()+"-"+additions.length,title:item.title,description:item.description,body:item.body,category:item.category,tags:item.tags,status:"draft",date:"Imported "+new Date().toLocaleDateString(),originalDate:item.date,tone:"blue",slug:item.slug,image:item.image,siteId:"studio-journal",bodyLoaded:true,sourceFilename:item.filename});
  }
  if(!additions.length){$("import-status").textContent="All selected titles already exist as drafts. No changes made.";return}
  try{localStorage.setItem(storageKey,JSON.stringify([...additions,...posts]));}
  catch(e){$("import-status").textContent="Browser storage is full or blocked. Nothing saved.";return}
  $("import-status").textContent=additions.length+" draft(s) saved locally; "+(picks.length-additions.length)+" duplicate title(s) skipped. Open Posts to review.";
  $("import-selected").disabled=true;
});
render();
})();