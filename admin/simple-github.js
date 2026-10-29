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