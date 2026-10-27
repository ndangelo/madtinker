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
  function loadPosts(){try{const saved=localStorage.getItem(storageKey);return saved?JSON.parse(saved):initialPosts.slice()}catch(e){return initialPosts.slice()}}
  function persist(){try{localStorage.setItem(storageKey,JSON.stringify(posts));return true}catch(e){return false}}
  function slugify(s){return (s||"your-post-title").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"your-post-title"}
  function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
  function showToast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2800)}
  function renderRows(){
    const query=$("search").value.toLowerCase().trim();
    const visible=posts.filter(p=>(currentFilter==="all"||p.status===currentFilter)&&((p.title+" "+p.description+" "+p.category).toLowerCase().includes(query)));
    $("post-rows").innerHTML=visible.map(p=>'<tr><td><div class="post-cell"><div class="post-thumb '+escapeHtml(p.tone||"green")+'">✳</div><div><div class="post-title">'+escapeHtml(p.title||"Untitled post")+'</div><div class="post-meta">'+escapeHtml(p.category||"Uncategorized")+'</div></div></div></td><td><span class="status-badge '+(p.status==="published"?"live":"draft")+'">'+(p.status==="published"?"Published":"Draft")+'</span></td><td>'+escapeHtml(p.date||"Just now")+'</td><td class="actions-heading"><button class="row-action" data-edit="'+escapeHtml(p.id)+'">Edit →</button></td></tr>').join("");
    $("empty-state").hidden=visible.length>0;
    $("stat-all").textContent=posts.length;
    $("stat-published").textContent=posts.filter(p=>p.status==="published").length;
    $("stat-drafts").textContent=posts.filter(p=>p.status==="draft").length;
    $("post-count").textContent=posts.length;
  }
  function showView(name){
    ["posts","editor","media","sites"].forEach(v=>$(v+"-view").hidden=v!==name);
    $("crumb").textContent=({posts:"Posts",editor:"Editor",media:"Media library",sites:"Sites"})[name]||"Posts";
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  }
  function openEditor(id){
    const p=posts.find(x=>x.id===id);
    editingId=p?p.id:null;
    $("post-title").value=p?p.title:"";
    $("post-description").value=p?p.description:"";
    $("post-body").value=p?p.body:"";
    $("post-category").value=p?p.category:"";
    $("post-tags").value=p?p.tags:"";
    $("save-status").textContent="Unsaved changes";
    $("preview-panel").hidden=true;
    updateSlug();showView("editor");window.scrollTo({top:0,behavior:"smooth"});
  }
  function updateSlug(){$("slug-preview").textContent="/"+slugify($("post-title").value)+"/"}
  function saveDraft(){
    const title=$("post-title").value.trim();
    if(!title){$("post-title").focus();showToast("Add a title before saving your draft.");return}
    const existing=posts.find(p=>p.id===editingId);
    const draft={id:editingId||("draft-"+Date.now()),title,description:$("post-description").value.trim(),body:$("post-body").value,category:$("post-category").value.trim(),tags:$("post-tags").value.trim(),status:"draft",date:"Edited just now",tone:existing?.tone||"green"};
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
  $("post-title").addEventListener("input",()=>{updateSlug();$("save-status").textContent="Unsaved changes"});
  ["post-description","post-body","post-category","post-tags"].forEach(id=>$(id).addEventListener("input",()=>$("save-status").textContent="Unsaved changes"));
  $("post-body").addEventListener("input",updateWordCount);
  $("search").addEventListener("input",renderRows);
  document.querySelectorAll(".filter-tab").forEach(b=>b.addEventListener("click",()=>{currentFilter=b.dataset.filter;document.querySelectorAll(".filter-tab").forEach(x=>x.classList.toggle("active",x===b));renderRows()}));
  document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
  document.querySelectorAll("[data-go-posts]").forEach(b=>b.addEventListener("click",()=>showView("posts")));
  $("post-rows").addEventListener("click",e=>{const b=e.target.closest("[data-edit]");if(b)openEditor(b.dataset.edit)});
  $("publish-btn").addEventListener("click",()=>showToast("Publishing is not connected yet."));
  updateWordCount();
  renderRows();
})();