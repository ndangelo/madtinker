(() => {
  const $ = (id) => document.getElementById(id);
  const storageKey = "studio-cms-prototype-posts-v1";
  const initialPosts = [
    {id:"p1",title:"Welcome to Studio Journal",description:"A first look at the ideas, projects, and processes collected here.",body:"Welcome to Studio Journal.\n\nThis is a starter post for the publication. Replace it with your own writing when you are ready.",category:"Notes",tags:"welcome, publishing",status:"published",date:"Oct 27, 2026",tone:"green"},
    {id:"p2",title:"Notes from the studio",description:"A few observations on process, experimentation, and making.",body:"## Process\n\nA work in progress is a place to test an idea before it becomes certain.\n\n- Observe closely\n- Make a small experiment\n- Reflect and revise",category:"Studio",tags:"process, notes",status:"draft",date:"Oct 26, 2026",tone:"rust"},
    {id:"p3",title:"Collecting visual fragments",description:"Gathering images and references as a way of thinking.",body:"Images can work like notes: incomplete, suggestive, and open to reinterpretation.",category:"Research",tags:"images, research",status:"draft",date:"Oct 24, 2026",tone:"blue"}
  ];
  let posts = loadPosts();
  let editingId = null;
  let currentFilter = "all";
  let toastTimer;
  let autosaveTimer;
  let apiConnected = false;
  const apiStorageKey = "studio-cms-api-base-v1";
  function loadPosts(){try{const saved=localStorage.getItem(storageKey);return saved?JSON.parse(saved):initialPosts.slice()}catch(e){return initialPosts.slice()}}
  function persist(){try{localStorage.setItem(storageKey,JSON.stringify(posts));return true}catch(e){return false}}
  function slugify(s){return (s||"your-post-title").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"your-post-title"}
  function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  function showToast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2800)}
  function renderRows(){
    const query=$("search").value.toLowerCase().trim();
    const visible=posts.filter(p=>(currentFilter==="all"||p.status===currentFilter)&&((p.title+" "+p.description+" "+p.category+" "+(p.tags||"")).toLowerCase().includes(query)));
    $("post-rows").innerHTML=visible.map(p=>'<tr><td><div class="post-cell"><div class="post-thumb '+escapeHtml(p.tone||"green")+'">✳</div><div><div class="post-title">'+escapeHtml(p.title||"Untitled post")+'</div><div class="post-meta">'+escapeHtml(p.category||"Uncategorized")+(p.tags?' · '+escapeHtml(p.tags):'')+'</div></div></div></td><td><span class="status-badge '+(p.status==="published"?"live":"draft")+'">'+(p.status==="published"?"Published":"Draft")+'</span></td><td>'+escapeHtml(p.date||"Just now")+'</td><td class="actions-heading row-actions"><button class="row-action" data-edit="'+escapeHtml(p.id)+'">Edit</button> <button class="row-action" data-duplicate="'+escapeHtml(p.id)+'">Copy</button> <button class="row-action danger-action" data-delete="'+escapeHtml(p.id)+'">Delete</button></td></tr>').join("");
    $("empty-state").hidden=visible.length>0;
    $("stat-all").textContent=posts.length;
    $("stat-published").textContent=posts.filter(p=>p.status==="published").length;
    $("stat-drafts").textContent=posts.filter(p=>p.status==="draft").length;
    $("post-count").textContent=posts.length;
  }
  function showView(name){
    ["posts","editor","media","sites","settings"].forEach(v=>$(v+"-view").hidden=v!==name);
    $("crumb").textContent=({posts:"Posts",editor:"Editor",media:"Media library",sites:"Sites",settings:"Settings"})[name]||"Posts";
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  }
  async function openEditor(id){
    let p=posts.find(x=>x.id===id);
    if(p && p.remote && !p.bodyLoaded){
      try{
        const data=await apiFetch("/api/posts?path="+encodeURIComponent(p.remotePath));
        const parsed=parsePostMarkdown(data.content);
        p={...p,...parsed,remote:true,remotePath:data.path,remoteSha:data.sha,bodyLoaded:true,id:p.id,status:parsed.status==="published"?"published":"draft"};
        posts=posts.map(item=>item.id===p.id?p:item);persist();renderRows();
      }catch(error){showToast("Could not load this GitHub post: "+error.message);return}
    }
    editingId=p?p.id:null;
    $("post-title").value=p?p.title:"";
    $("post-description").value=p?p.description:"";
    $("post-body").value=p?p.body:"";
    $("post-category").value=p?p.category:"";
    $("post-tags").value=p?p.tags:"";
    $("post-slug").value=p?p.slug||"":"";
    $("post-image").value=p?p.image||"":"";
    $("save-status").textContent="Unsaved changes";
    $("preview-panel").hidden=true;
    updateSlug();showView("editor");window.scrollTo({top:0,behavior:"smooth"});
  }
  function updateSlug(){$("slug-preview").textContent="/"+slugify($("post-slug").value||$("post-title").value)+"/"}
  function saveDraft(){
    const title=$("post-title").value.trim();
    if(!title){$("post-title").focus();showToast("Add a title before saving your draft.");return}
    const existing=posts.find(p=>p.id===editingId);
    const draft={id:editingId||("draft-"+Date.now()),title,description:$("post-description").value.trim(),body:$("post-body").value,category:$("post-category").value.trim(),tags:$("post-tags").value.trim(),status:"draft",date:"Edited just now",tone:existing?.tone||"green",slug:$("post-slug").value.trim(),image:$("post-image").value.trim(),remotePath:existing?.remotePath||"",remoteSha:existing?.remoteSha||"",remote:!!existing?.remote,bodyLoaded:true};
    if(existing){posts=posts.map(p=>p.id===editingId?draft:p)}else{posts.unshift(draft);editingId=draft.id}
    const saved=persist();renderRows();$("save-status").textContent=saved?"Saved in this browser":"Could not save — browser storage unavailable";
    showToast(saved?"Draft saved in this browser.":"Browser storage is unavailable. Copy your text somewhere safe.");
  }
  function markdownToHtml(source){
    const blocks=String(source||"").split(/\n\s*\n/);
    return blocks.map(block=>{
      const trimmed=block.trim();
      if(!trimmed)return "";
      if(/^\x60\x60\x60/.test(trimmed))return "<pre><code>"+escapeHtml(trimmed.replace(/^\x60\x60\x60[^\n]*\n?/,"").replace(/\n?\x60\x60\x60$/,""))+"</code></pre>";
      if(/^#{1,3}\s/.test(trimmed)){const m=trimmed.match(/^(#{1,3})\s+([\s\S]*)$/);const level=m[1].length;return "<h"+level+">"+inlineMarkdown(m[2])+"</h"+level+">"}
      if(/^[-*]\s/m.test(trimmed)){return "<ul>"+trimmed.split("\n").filter(line=>/^[-*]\s/.test(line.trim())).map(line=>"<li>"+inlineMarkdown(line.trim().replace(/^[-*]\s+/,""))+"</li>").join("")+"</ul>"}
      if(/^>\s?/.test(trimmed))return "<blockquote>"+inlineMarkdown(trimmed.replace(/^>\s?/gm,""))+"</blockquote>";
      return "<p>"+inlineMarkdown(trimmed).replace(/\n/g,"<br>")+"</p>";
    }).join("");
  }
  function inlineMarkdown(source){
    let out=escapeHtml(source);
    out=out.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/\x60([^\x60]+)\x60/g,"<code>$1</code>");
    out=out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    return out;
  }
  function updateWordCount(){
    const text=$("post-body").value.trim();
    const words=text?text.split(/\s+/).length:0;
    $("word-count").textContent=words+" "+(words===1?"word":"words")+" · Markdown";
  }
  function insertFormatting(kind){
    const area=$("post-body");const start=area.selectionStart;const end=area.selectionEnd;const selected=area.value.slice(start,end);
    let before="",after="",replacement="";
    if(kind==="link"){before="[";after="](https://example.com)";replacement=selected||"link text"}
    else if(typeof kind==="object"){before=kind.value||"";replacement=selected||"your text"}
    else{before=kind;after=kind;replacement=selected||"text"}
    const value=area.value;area.value=value.slice(0,start)+before+replacement+after+value.slice(end);
    area.focus();const cursor=start+before.length+replacement.length;area.setSelectionRange(cursor,cursor);
    updateWordCount();$("save-status").textContent="Unsaved changes";
  }
  function exportMarkdown(){
    const title=$("post-title").value.trim()||"Untitled post";
    const description=$("post-description").value.trim();
    const category=$("post-category").value.trim();
    const tags=$("post-tags").value.split(",").map(t=>t.trim()).filter(Boolean);
    const quote=s=>JSON.stringify(s);
    const date=new Date().toISOString().slice(0,10);
    const frontMatter=["---","title: "+quote(title),"date: "+date+" 09:00:00 -0400"];
    if(description)frontMatter.push("description: "+quote(description));
    if(category)frontMatter.push("categories:", "  - "+quote(category));
    if(tags.length)frontMatter.push("tags:",...tags.map(t=>"  - "+quote(t)));
    if($("post-slug").value.trim())frontMatter.push("slug: "+quote($("post-slug").value.trim()));
    if($("post-image").value.trim())frontMatter.push("image: "+quote($("post-image").value.trim()));
    frontMatter.push("published: false","---","");
    const content=frontMatter.join("\n")+ $("post-body").value+"\n";
    const blob=new Blob([content],{type:"text/markdown;charset=utf-8"});
    const url=URL.createObjectURL(blob);const link=document.createElement("a");
    link.href=url;link.download=date+"-"+slugify(title)+".md";document.body.appendChild(link);link.click();link.remove();URL.revokeObjectURL(url);
    showToast("Markdown file exported. It has not been published.");
  }
  function preview(){
    $("preview-title").textContent=$("post-title").value||"Untitled post";
    $("preview-description").textContent=$("post-description").value;
    $("preview-body").innerHTML=markdownToHtml($("post-body").value);
    $("preview-body").classList.add("preview-content");
    $("preview-panel").hidden=false;
    $("preview-panel").scrollIntoView({behavior:"smooth",block:"nearest"});
  }
  $("new-post").addEventListener("click",()=>openEditor(null));
  $("back-to-posts").addEventListener("click",()=>{showView("posts");renderRows()});
  $("save-draft").addEventListener("click",saveDraft);
  $("preview-btn").addEventListener("click",preview);
  $("export-post").addEventListener("click",exportMarkdown);
  document.querySelectorAll("[data-wrap]").forEach(button=>button.addEventListener("click",()=>insertFormatting(button.dataset.wrap)));
  document.querySelectorAll("[data-prefix]").forEach(button=>button.addEventListener("click",()=>insertFormatting({value:button.dataset.prefix,kind:"prefix"})));
  document.querySelectorAll("[data-link]").forEach(button=>button.addEventListener("click",()=>insertFormatting("link")));
  $("close-preview").addEventListener("click",()=>$("preview-panel").hidden=true);
  $("post-title").addEventListener("input",()=>{updateSlug();markUnsaved()});
  ["post-description","post-body","post-category","post-tags","post-slug","post-image"].forEach(id=>$(id).addEventListener("input",()=>{if(id==="post-slug")updateSlug();markUnsaved()}));
  $("post-body").addEventListener("input",updateWordCount);
  $("search").addEventListener("input",renderRows);
  document.querySelectorAll(".filter-tab").forEach(b=>b.addEventListener("click",()=>{currentFilter=b.dataset.filter;document.querySelectorAll(".filter-tab").forEach(x=>x.classList.toggle("active",x===b));renderRows()}));
  document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
  document.querySelectorAll("[data-go-posts]").forEach(b=>b.addEventListener("click",()=>showView("posts")));
  $("post-rows").addEventListener("click",e=>{
    const edit=e.target.closest("[data-edit]");if(edit){openEditor(edit.dataset.edit);return}
    const duplicate=e.target.closest("[data-duplicate]");if(duplicate){duplicatePost(duplicate.dataset.duplicate);return}
    const del=e.target.closest("[data-delete]");if(del)deletePost(del.dataset.delete);
  });
  $("backup-posts").addEventListener("click",exportBackup);
  $("restore-posts").addEventListener("click",()=>$("backup-file").click());
  $("backup-file").addEventListener("change",importBackup);
  $("publish-btn").addEventListener("click",publishPost);
  $("api-url").value=localStorage.getItem(apiStorageKey)||"";
  $("test-api").addEventListener("click",testApiConnection);
  $("sync-api").addEventListener("click",syncRemotePosts);
  document.addEventListener("keydown",e=>{const mod=/Mac|iPhone|iPad/.test(navigator.platform)?e.metaKey:e.ctrlKey;if(mod&&e.key.toLowerCase()==="s"&&!$("editor-view").hidden){e.preventDefault();saveDraft()}if(mod&&e.key.toLowerCase()==="enter"&&!$("editor-view").hidden){e.preventDefault();preview()}});
  function apiBase(){
    const value=$("api-url").value.trim()||localStorage.getItem(apiStorageKey)||"";
    return value.replace(/\\/+$/,"");
  }
  async function apiFetch(path,options={}){
    const base=apiBase();if(!base)throw new Error("Enter the API base URL in Settings first.");
    const response=await fetch(base+path,{...options,credentials:"include",headers:{"Content-Type":"application/json",...(options.headers||{})}});
    let data={};try{data=await response.json()}catch(e){}
    if(!response.ok)throw new Error(data.error||("Request failed ("+response.status+")."));
    return data;
  }
  function setApiStatus(message,kind=""){
    const status=$("api-status");status.textContent=message;status.className="api-status"+(kind?" "+kind:"");
  }
  async function testApiConnection(){
    const base=apiBase();
    if(!/^https:\\/\\//i.test(base)){setApiStatus("Enter a complete HTTPS API URL.", "error");return}
    localStorage.setItem(apiStorageKey,base);$("test-api").disabled=true;setApiStatus("Checking the protected API…");
    try{
      const result=await apiFetch("/api/health");
      apiConnected=!!result.ok;$("sync-api").disabled=!apiConnected;
      $("publish-btn").disabled=!apiConnected;
      $("publish-btn").classList.toggle("is-enabled",apiConnected);
      setApiStatus("Connected. Authentication passed and the API is responding.", "ok");
      showToast("Publishing API connection verified.");
    }catch(error){
      apiConnected=false;$("sync-api").disabled=true;$("publish-btn").disabled=true;
      setApiStatus("Connection failed: "+error.message+" Check the URL, Cloudflare Access login, and allowed dashboard origin.", "error");
    }finally{$("test-api").disabled=false}
  }
  async function syncRemotePosts(){
    $("sync-api").disabled=true;setApiStatus("Loading repository post list…");
    try{
      const data=await apiFetch("/api/posts");
      const remoteFiles=Array.isArray(data.posts)?data.posts:[];
      let added=0;
      for(const file of remoteFiles){
        const existing=posts.find(p=>p.remotePath===file.path);
        if(existing){existing.remoteSha=file.sha;existing.remote=true;continue}
        const filename=file.name.replace(/^\\d{4}-\\d{2}-\\d{2}-/,"").replace(/\\.md$/i,"").replace(/-/g," ");
        posts.push({id:"remote-"+file.sha, title:filename,description:"",body:"",category:"",tags:"",status:"published",date:"In GitHub",tone:"green",slug:"",image:"",remotePath:file.path,remoteSha:file.sha,remote:true,bodyLoaded:false});
        added++;
      }
      persist();renderRows();setApiStatus("Synced "+remoteFiles.length+" repository posts; "+added+" added to this dashboard.", "ok");showToast("Repository post list synced.");
    }catch(error){setApiStatus("Sync failed: "+error.message,"error")}
    finally{$("sync-api").disabled=!apiConnected}
  }
  function yamlScalar(front,key){
    const match=front.match(new RegExp("^"+key+":\\s*(.*)$","m"));if(!match)return "";
    const raw=match[1].trim();
    if((raw.startsWith('"')&&raw.endsWith('"'))||(raw.startsWith("'")&&raw.endsWith("'"))){try{return JSON.parse(raw.startsWith("'")?'"'+raw.slice(1,-1).replace(/"/g,'\\"')+'"':raw)}catch(e){return raw.slice(1,-1)}}
    return raw;
  }
  function yamlList(front,key){
    const match=front.match(new RegExp("^"+key+":\\s*\\n((?:[ \\t]+-.*(?:\\n|$))+)","m"));
    if(!match)return [];
    return match[1].split("\\n").map(line=>line.replace(/^\\s*-\\s*/,"").trim()).filter(Boolean).map(v=>v.replace(/^["']|["']$/g,""));
  }
  function parsePostMarkdown(content){
    const match=String(content||"").match(/^---\\s*\\n([\\s\\S]*?)\\n---\\s*\\n?([\\s\\S]*)$/);
    if(!match)throw new Error("This file does not have valid Jekyll front matter.");
    const front=match[1];const body=match[2];
    const published=yamlScalar(front,"published").toLowerCase()!=="false";
    return {title:yamlScalar(front,"title")||"Untitled post",description:yamlScalar(front,"description"),category:yamlList(front,"categories")[0]||yamlScalar(front,"category"),tags:yamlList(front,"tags").join(", "),slug:yamlScalar(front,"slug"),image:yamlScalar(front,"image"),body,status:published?"published":"draft",bodyLoaded:true};
  }
  async function publishPost(){
    if(!apiConnected){showToast("Connect the publishing API in Settings first.");return}
    const title=$("post-title").value.trim();if(!title){$("post-title").focus();showToast("Add a title before publishing.");return}
    const existing=posts.find(p=>p.id===editingId);
    const date=existing?.remotePath?.match(/_posts\\/(\\d{4}-\\d{2}-\\d{2})-/)?.[1]||new Date().toLocaleDateString("en-CA");
    const slug=slugify($("post-slug").value||title);
    const path=existing?.remotePath||("_posts/"+date+"-"+slug+".md");
    const quote=value=>JSON.stringify(value);
    const tags=$("post-tags").value.split(",").map(v=>v.trim()).filter(Boolean);
    const lines=["---","title: "+quote(title),"date: "+date+" 09:00:00 -0400","description: "+quote($("post-description").value.trim())];
    if($("post-category").value.trim())lines.push("categories:","  - "+quote($("post-category").value.trim()));
    if(tags.length)lines.push("tags:",...tags.map(tag=>"  - "+quote(tag)));
    if($("post-slug").value.trim())lines.push("slug: "+quote($("post-slug").value.trim()));
    if($("post-image").value.trim())lines.push("image: "+quote($("post-image").value.trim()));
    lines.push("published: true","---","");
    const content=lines.join("\\n")+$("post-body").value+"\\n";
    const button=$("publish-btn");button.disabled=true;button.textContent="Publishing…";
    try{
      const result=await apiFetch("/api/posts",{method:"POST",body:JSON.stringify({path,content,sha:existing?.remoteSha||undefined})});
      const record={id:existing?.id||("remote-"+result.sha),title,description:$("post-description").value.trim(),body:$("post-body").value,category:$("post-category").value.trim(),tags:$("post-tags").value.trim(),status:"published",date:"Published just now",tone:existing?.tone||"green",slug:$("post-slug").value.trim(),image:$("post-image").value.trim(),remotePath:path,remoteSha:result.sha,remote:true,bodyLoaded:true};
      if(existing)posts=posts.map(p=>p.id===existing.id?record:p);else{posts.unshift(record);editingId=record.id}
      persist();renderRows();$("save-status").textContent="Published to GitHub";
      showToast("Post committed to GitHub. The site rebuild may take a few minutes.");
      if(result.commit)window.open(result.commit,"_blank","noopener");
    }catch(error){showToast("Publish failed: "+error.message)}
    finally{button.textContent="Publish post";button.disabled=!apiConnected}
  }
  function markUnsaved(){ $("save-status").textContent="Unsaved changes";clearTimeout(autosaveTimer);autosaveTimer=setTimeout(quietAutosave,900); }
  function quietAutosave(){
    const title=$("post-title").value.trim();if(!title)return;
    const existing=posts.find(p=>p.id===editingId);
    const draft={id:editingId||("draft-"+Date.now()),title,description:$("post-description").value.trim(),body:$("post-body").value,category:$("post-category").value.trim(),tags:$("post-tags").value.trim(),status:"draft",date:"Edited just now",tone:existing?.tone||"green",slug:$("post-slug").value.trim(),image:$("post-image").value.trim(),remotePath:existing?.remotePath||"",remoteSha:existing?.remoteSha||"",remote:!!existing?.remote,bodyLoaded:true};
    if(existing)posts=posts.map(p=>p.id===editingId?draft:p);else{posts.unshift(draft);editingId=draft.id}
    const saved=persist();renderRows();$("save-status").textContent=saved?"Auto-saved locally":"Local save failed";
  }
  function duplicatePost(id){const p=posts.find(item=>item.id===id);if(!p)return;posts.unshift({...p,id:"copy-"+Date.now(),title:(p.title||"Untitled")+" (copy)",status:"draft",date:"Duplicated just now"});persist();renderRows();showToast("A draft copy was created.");}
  function deletePost(id){const p=posts.find(item=>item.id===id);if(!p)return;if(!window.confirm("Delete \""+(p.title||"Untitled post")+"\" from this browser? Export a backup first if you may need it."))return;posts=posts.filter(item=>item.id!==id);persist();renderRows();showToast("Post deleted from this browser.");if(editingId===id)showView("posts");}
  function downloadBlob(filename,content,type){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function exportBackup(){const data={format:"studio-cms-backup",version:1,exportedAt:new Date().toISOString(),posts};downloadBlob("studio-cms-backup-"+new Date().toISOString().slice(0,10)+".json",JSON.stringify(data,null,2),"application/json");showToast("Backup downloaded. Store it somewhere safe.");}
  function importBackup(event){const file=event.target.files&&event.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(reader.result);const incoming=Array.isArray(parsed)?parsed:parsed.posts;if(!Array.isArray(incoming)||!incoming.every(p=>p&&typeof p==="object"&&typeof p.title==="string"&&typeof p.body==="string"))throw new Error("Invalid backup");if(!window.confirm("Import "+incoming.length+" posts? This replaces posts saved in this browser."))return;posts=incoming.map((p,i)=>({id:String(p.id||("import-"+Date.now()+"-"+i),),title:p.title,description:String(p.description||""),body:p.body,category:String(p.category||""),tags:String(p.tags||""),status:p.status==="published"?"published":"draft",date:String(p.date||"Imported"),tone:["green","rust","blue"].includes(p.tone)?p.tone:"green",slug:String(p.slug||""),image:String(p.image||"")}));persist();renderRows();showToast("Backup imported into this browser.");}catch(e){showToast("That file doesn't look like a Studio CMS backup.");}finally{$("backup-file").value="";}};reader.readAsText(file);}
  updateWordCount();
  renderRows();
})();