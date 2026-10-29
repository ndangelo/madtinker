/* Simple GitHub publishing mode: no tokens, Cloudflare, or API.
   Publishing is a two-step GitHub-authenticated file upload, not an automatic commit. */
(() => {
  const repo="https://github.com/ndangelo/madtinker";
  const byId=id=>document.getElementById(id);
  const hide=(el)=>{if(el)el.style.display="none"};
  function replaceView(id,html){const el=byId(id);if(el)el.innerHTML=html}
  document.addEventListener("DOMContentLoaded",()=>{
    hide(document.querySelector('[data-view="sites"]'));
    hide(document.querySelector('[data-view="settings"]'));
    hide(document.querySelector(".prototype-pill"));
    const note=document.querySelector("#posts-view .footnote");
    if(note)note.textContent="Drafts are saved only in this browser. Export a backup regularly. Published files are managed in GitHub.";
    // Public repository index: browse and edit existing posts without credentials in the dashboard.
    const postsView=byId("posts-view");
    if(postsView){
      const section=document.createElement("section");
      section.className="content-card";
      section.style.marginTop="24px";
      section.innerHTML='<div class="list-toolbar"><div><h2 style="margin:0">Published files on GitHub</h2><p class="helper-text">Search the actual repository. Edit opens GitHub with your normal sign-in.</p></div><button class="secondary-btn compact-btn" id="repo-refresh">Refresh</button></div><div class="list-toolbar"><label class="search-box" style="flex:1"><span>⌕</span><input id="repo-search" type="search" placeholder="Find a published post…" aria-label="Search repository posts"></label><span id="repo-count" class="helper-text">Loading…</span></div><div id="repo-post-list" style="padding:12px 20px">Loading published files…</div>';
      postsView.appendChild(section);
      let files=[];
      let limit=60;
      const list=section.querySelector("#repo-post-list");
      const count=section.querySelector("#repo-count");
      async function editHere(path){
        const editorLink=repo+"/edit/main/"+path.split("/").map(encodeURIComponent).join("/");
        const response=await fetch("https://raw.githubusercontent.com/ndangelo/madtinker/main/"+path.split("/").map(encodeURIComponent).join("/"));
        if(!response.ok)throw new Error("Could not retrieve the post ("+response.status+")");
        const source=await response.text();
        const match=source.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---\\r?\\n?/);
        if(!match)throw new Error("This post has no recognizable YAML front matter");
        const front=match[1],body=source.slice(match[0].length);
        const scalar=key=>{const m=front.match(new RegExp("^"+key+":\\\\s*(.*)$","m"));if(!m)return "";let v=m[1].trim();try{if(v.startsWith('"'))return JSON.parse(v)}catch(e){}return v.replace(/^['"]|['"]$/g,"")};
        byId("new-post").click();
        const name=path.split("/").pop().replace(/^\\d{4}-\\d{2}-\\d{2}-/,"").replace(/\\.md$/,"").replace(/-/g," ");
        byId("post-title").value=scalar("title")||name;
        byId("post-description").value=scalar("description");
        byId("post-body").value=body;
        byId("post-category").value=scalar("category");
        byId("post-tags").value=scalar("tags").replace(/^\\[|\\]$/g,"");
        byId("post-slug").value=scalar("slug");
        byId("post-image").value=scalar("image");
        const old=byId("github-original-note");if(old)old.remove();
        const note=document.createElement("div");note.id="github-original-note";note.className="settings-card";
        note.innerHTML='<h2>Editing a GitHub post</h2><p>Your changes are local until you commit them. Use <strong>Save draft</strong> to keep a browser copy. To update the original file, copy your edited body into GitHub and commit it there.</p><p><a class="secondary-btn" target="_blank" rel="noopener noreferrer" href="'+editorLink+'">Open original file on GitHub ↗</a></p><p class="helper-text">Original: '+path.replace(/[&<>]/g,"")+'</p>';
        byId("editor-view").appendChild(note);
        byId("save-status").textContent="Loaded from GitHub — not published";
        byId("publish-btn").textContent="Export as new post";
      }
      function render(){
        const q=section.querySelector("#repo-search").value.toLowerCase().trim();
        const matches=files.filter(p=>p.path.toLowerCase().includes(q));
        count.textContent=matches.length+" files";
        const visible=matches.slice(0,limit);
        list.innerHTML=visible.length?visible.map(p=>{
          const path=p.path;
          const title=path.split("/").pop().replace(/^\d{4}-\d{2}-\d{2}-/,"").replace(/\.md$/,"").replace(/-/g," ");
          const url=repo+"/edit/main/"+path.split("/").map(encodeURIComponent).join("/");
          const safe=x=>x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
          return '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid #30445d;padding:12px 0"><div><strong>'+safe(title)+'</strong><div class="helper-text">'+safe(path)+'</div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="secondary-btn compact-btn" data-edit-here="'+safe(path)+'">Load in editor</button><a class="secondary-btn compact-btn" target="_blank" rel="noopener noreferrer" href="'+safe(url)+'">Edit on GitHub</a></div></div>';
        }).join(""):'<p>No matching repository posts.</p>';
        if(matches.length>limit)list.innerHTML+='<button id="repo-more" class="secondary-btn compact-btn" style="margin-top:12px">Show more</button>';
        const more=section.querySelector("#repo-more");if(more)more.onclick=()=>{limit+=60;render()};
      }
      async function load(){
        count.textContent="Loading…";
        try{
          const response=await fetch("https://api.github.com/repos/ndangelo/madtinker/git/trees/main?recursive=1",{headers:{"Accept":"application/vnd.github+json"}});
          if(!response.ok)throw new Error("GitHub returned "+response.status);
          const data=await response.json();
          if(data.truncated)throw new Error("GitHub returned an incomplete file list");
          files=(data.tree||[]).filter(p=>p.type==="blob"&&/^(_posts|_nuggetofjoy)\/.*\.md$/i.test(p.path)).sort((a,b)=>b.path.localeCompare(a.path));
          render();
        }catch(error){count.textContent="Unavailable";list.textContent="Could not load the GitHub post index: "+error.message+". You can still browse the repository directly."}
      }
      list.addEventListener("click",async e=>{
        const button=e.target.closest("[data-edit-here]");if(!button)return;
        button.disabled=true;button.textContent="Loading…";
        try{await editHere(button.dataset.editHere)}catch(error){alert(error.message)}
        finally{button.disabled=false;button.textContent="Load in editor"}
      });
      section.querySelector("#repo-search").addEventListener("input",()=>{limit=60;render()});
      section.querySelector("#repo-refresh").addEventListener("click",load);
      load();
    }
    const publish=byId("publish-btn");
    if(publish){
      publish.disabled=false;
      publish.textContent="Prepare for GitHub";
      publish.classList.add("is-enabled");
      publish.addEventListener("click",event=>{
        event.preventDefault();event.stopImmediatePropagation();
        const title=byId("post-title").value.trim();
        if(!title){byId("post-title").focus();alert("Add a title first.");return}
        byId("export-post").click();
        const url=repo+"/upload/main/_posts";
        window.open(url,"_blank","noopener,noreferrer");
        alert("Your publish-ready .md file has downloaded. In the GitHub tab, choose that file, then commit it. GitHub handles sign-in; the site publishes after deployment.");
      },true);
    }
    document.querySelectorAll(".disabled-note").forEach(n=>{n.textContent="Downloads a Jekyll post, then opens GitHub's upload page. Finish publishing by committing the file in GitHub."});
    replaceView("media-view",'<div class="page-heading"><div><p class="eyebrow">ASSET MANAGEMENT</p><h1>Media library</h1><p class="subhead">Upload images directly to GitHub. No separate API or credentials required.</p></div></div><div class="settings-card"><h2>Images</h2><p>Open the image folder in GitHub, select Add file → Upload files, then commit. Copy the image path into your post.</p><p><a class="primary-btn" href="'+repo+'/upload/main/assets/images" target="_blank" rel="noopener noreferrer">Upload images on GitHub ↗</a></p><p><a href="'+repo+'/tree/main/assets/images" target="_blank" rel="noopener noreferrer">Browse image folder ↗</a></p></div>');
    const editorNote=document.querySelector("#editor-view .image-placeholder small");
    if(editorNote)editorNote.textContent="Use Media library to upload via GitHub";
  });
})();