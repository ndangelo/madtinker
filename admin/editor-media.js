/* Reusable image picker for the post editor; no authentication secrets in the browser. */
(() => {
  document.addEventListener("DOMContentLoaded",()=>{
    const $=id=>document.getElementById(id);
    const editor=$("editor-view"), body=$("post-body"), feature=$("post-image");
    if(!editor||!body||!feature)return;
    const style=document.createElement("style");
    style.textContent=`
      .mt-media-actions{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}
      .mt-media-dialog{position:fixed;inset:0;z-index:9999;background:rgba(3,10,22,.86);display:flex;align-items:center;justify-content:center;padding:16px}
      .mt-media-dialog[hidden]{display:none}
      .mt-media-panel{background:#142339;color:#eaf2fc;border:1px solid #50647d;border-radius:14px;width:min(940px,100%);max-height:90vh;overflow:auto;padding:22px;box-shadow:0 22px 70px #0009}
      .mt-media-top{display:flex;align-items:center;justify-content:space-between;gap:12px}
      .mt-media-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:12px;margin-top:16px}
      .mt-media-tile{border:1px solid #40546b;border-radius:9px;padding:8px;background:#1c2e46;color:#fff;text-align:left;cursor:pointer;overflow-wrap:anywhere}
      .mt-media-tile:hover,.mt-media-tile:focus{outline:2px solid #b5e876}
      .mt-media-tile img{width:100%;height:108px;object-fit:contain;background:#0e1c2c;border-radius:5px}
      .mt-media-tile span{display:block;font-size:11px;margin-top:6px}
      .mt-media-tools{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:16px}
      .mt-media-tools input{flex:1;min-width:170px}
    `;
    document.head.append(style);
    const actions=document.createElement("div");
    actions.className="mt-media-actions";
    actions.innerHTML='<button type="button" class="secondary-btn" id="mt-insert-image">＋ Insert image</button><button type="button" class="secondary-btn" id="mt-feature-image">Choose featured image</button><a class="secondary-btn" href="https://github.com/ndangelo/madtinker/upload/main/assets/images" target="_blank" rel="noopener noreferrer">Upload image ↗</a>';
    const toolbar=$("coding-workspace");toolbar.parentNode.insertBefore(actions,toolbar);
    const featureButton=document.createElement("button");featureButton.type="button";featureButton.className="secondary-btn";featureButton.textContent="Browse existing images";feature.after(featureButton);
    const dialog=document.createElement("div");dialog.className="mt-media-dialog";dialog.hidden=true;dialog.setAttribute("role","dialog");dialog.setAttribute("aria-modal","true");dialog.setAttribute("aria-label","Choose image");
    dialog.innerHTML='<div class="mt-media-panel"><div class="mt-media-top"><div><h2 style="margin:0">Choose an image</h2><p class="helper-text">Select an image to insert into your post or use as its cover.</p></div><button class="secondary-btn" id="mt-media-close" type="button">Close</button></div><div class="mt-media-tools"><input type="search" id="mt-media-search" placeholder="Search filenames or folders…" aria-label="Search images"><button class="secondary-btn" type="button" id="mt-media-reload">Refresh</button><a class="secondary-btn" href="https://github.com/ndangelo/madtinker/upload/main/assets/images" target="_blank" rel="noopener noreferrer">Upload on GitHub ↗</a></div><p class="helper-text" id="mt-media-message" role="status">Loading images…</p><div class="mt-media-grid" id="mt-media-results"></div></div>';
    document.body.append(dialog);
    let images=[],mode="body",lastFocus=null;
    const urlFor=path=>"https://madtinker.net/"+path.split("/").map(encodeURIComponent).join("/");
    const close=()=>{dialog.hidden=true;if(lastFocus)lastFocus.focus()};
    function insert(url,path){
      if(mode==="featured"){feature.value=url;feature.dispatchEvent(new Event("input",{bubbles:true}))}
      else {
        const html=$("post-mode")?.value==="html";
        const alt=path.split("/").pop().replace(/\.[^.]+$/,"").replace(/[-_]/g," ");
        const snippet=html?'<img src="'+url+'" alt="'+alt.replace(/"/g,"&quot;")+'" loading="lazy">':'!['+alt+']('+url+')';
        const cm=document.querySelector(".CodeMirror");
        if(html&&cm&&cm.CodeMirror){cm.CodeMirror.replaceSelection(snippet);cm.CodeMirror.focus()}
        else {const start=body.selectionStart,end=body.selectionEnd;body.setRangeText(snippet,start,end,"end");body.dispatchEvent(new Event("input",{bubbles:true}));body.focus()}
      }
      close();
    }
    function render(){
      const query=$("mt-media-search").value.toLowerCase().trim();
      const found=images.filter(p=>p.path.toLowerCase().includes(query));
      $("mt-media-message").textContent=found.length+" images found. Click one to "+(mode==="featured"?"set the featured image.":"insert it into the post.");
      const grid=$("mt-media-results");grid.replaceChildren();
      for(const p of found.slice(0,120)){
        const url=urlFor(p.path);
        const button=document.createElement("button");button.type="button";button.className="mt-media-tile";
        const img=document.createElement("img");img.src=url;img.alt="";img.loading="lazy";
        const name=document.createElement("span");name.textContent=p.path;
        button.append(img,name);button.onclick=()=>insert(url,p.path);grid.append(button);
      }
      if(found.length>120){const note=document.createElement("p");note.textContent="Showing the first 120 images. Refine your search to see more.";grid.append(note)}
    }
    async function load(){
      $("mt-media-message").textContent="Loading repository images…";
      try{
        const r=await fetch("https://api.github.com/repos/ndangelo/madtinker/git/trees/main?recursive=1");
        if(!r.ok)throw Error("GitHub returned "+r.status);
        const data=await r.json();if(data.truncated)throw Error("GitHub returned an incomplete list");
        images=(data.tree||[]).filter(p=>p.type==="blob"&&/^assets\/images\/.*\.(jpe?g|png|webp|gif|avif|svg)$/i.test(p.path));
        render();
      }catch(e){$("mt-media-message").textContent="Unable to load images: "+e.message}
    }
    function open(which){mode=which;lastFocus=document.activeElement;dialog.hidden=false;$("mt-media-search").focus();if(images.length)render();else load()}
    $("mt-insert-image").onclick=()=>open("body");
    $("mt-feature-image").onclick=()=>open("featured");
    featureButton.onclick=()=>open("featured");
    $("mt-media-close").onclick=close;
    $("mt-media-reload").onclick=load;
    $("mt-media-search").addEventListener("input",render);
    dialog.addEventListener("click",e=>{if(e.target===dialog)close()});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!dialog.hidden)close()});
  });
})();