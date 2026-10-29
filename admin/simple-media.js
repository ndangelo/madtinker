/* Cloudflare-free media workspace. Files are prepared locally; GitHub performs uploads. */
(() => {
  const owner="ndangelo", repository="madtinker";
  const repoUrl="https://github.com/"+owner+"/"+repository;
  const base="https://madtinker.net/";
  const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const slug=s=>s.toLowerCase().replace(/[^a-z0-9._-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");
  const validFile=file=>/^image\/(png|jpeg|gif|webp|avif)$/.test(file.type);
  const copy=async value=>{try{await navigator.clipboard.writeText(value);alert("Copied: "+value)}catch(e){prompt("Copy this URL:",value)}};
  document.addEventListener("DOMContentLoaded",()=>{
    const view=document.getElementById("media-view");if(!view)return;
    view.innerHTML=`
      <div class="page-heading"><div><p class="eyebrow">ASSET MANAGEMENT</p><h1>Media library</h1><p class="subhead">Prepare images here and upload them with your GitHub login. No Cloudflare API.</p></div></div>
      <div class="settings-card" style="margin-bottom:20px">
        <h2>1. Select images</h2>
        <p>Choose images to preview and prepare. Files stay on your computer until you upload them on GitHub.</p>
        <label class="field-label" for="simple-media-folder">Destination folder</label>
        <input id="simple-media-folder" value="assets/images" aria-label="GitHub image folder" spellcheck="false">
        <div id="simple-media-drop" style="margin-top:14px;padding:26px;border:2px dashed #526a83;border-radius:12px;text-align:center">
          <p>Drop images here or choose files</p>
          <input type="file" id="simple-media-files" accept="image/png,image/jpeg,image/gif,image/webp,image/avif" multiple>
        </div>
        <p class="helper-text" id="simple-media-feedback" role="status">Supported: JPG, PNG, GIF, WebP, AVIF. Avoid spaces in filenames for easier linking.</p>
        <div id="simple-media-preview" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-top:14px"></div>
      </div>
      <div class="settings-card" style="margin-bottom:20px">
        <h2>2. Upload to GitHub</h2>
        <p>Use the GitHub upload page, select the same image files, and commit. The previews above are not uploaded automatically.</p>
        <p><a id="simple-media-upload" class="primary-btn" href="${repoUrl}/upload/main/assets/images" target="_blank" rel="noopener noreferrer">Open GitHub image uploader ↗</a></p>
        <p class="helper-text">After committing, select Refresh below to find the new images and copy their full URLs.</p>
      </div>
      <div class="settings-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px"><h2>Images already on GitHub</h2><button id="simple-media-refresh" class="secondary-btn compact-btn">Refresh</button></div>
        <input id="simple-media-search" type="search" placeholder="Search image filenames…" aria-label="Search uploaded images" style="width:100%;margin:12px 0">
        <p class="helper-text" id="simple-media-count">Loading…</p>
        <div id="simple-media-existing" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:12px"></div>
      </div>`;
    const $=id=>document.getElementById(id);
    const folder=()=>{
      const f=$("simple-media-folder").value.trim().replace(/^\/+|\/+$/g,"");
      return /^assets\/images(?:\/[a-zA-Z0-9_-]+)*$/.test(f)?f:null;
    };
    const updateUpload=()=>{
      const f=folder();
      $("simple-media-upload").href=f?repoUrl+"/upload/main/"+f:repoUrl+"/tree/main/assets/images";
      $("simple-media-feedback").textContent=f?"Images will go in "+f+". Select the same files on GitHub to upload.":"Use a folder inside assets/images, with letters, numbers, dashes, or underscores.";
    };
    $("simple-media-folder").addEventListener("input",updateUpload);
    const previews=[];
    function showFiles(files){
      for(const file of files){
        if(!validFile(file))continue;
        const url=URL.createObjectURL(file);previews.push(url);
        const card=document.createElement("div");card.style.cssText="border:1px solid #30445d;border-radius:10px;padding:10px;overflow-wrap:anywhere";
        const img=document.createElement("img");img.src=url;img.alt="Preview of "+file.name;img.style.cssText="width:100%;height:115px;object-fit:contain;background:#101d30";
        const name=document.createElement("p");name.style.fontSize="12px";name.textContent=file.name;
        const suggested=document.createElement("p");suggested.style.fontSize="11px";suggested.textContent="Suggested filename: "+slug(file.name);
        card.append(img,name,suggested);
        $("simple-media-preview").append(card);
      }
    }
    $("simple-media-files").addEventListener("change",e=>showFiles(e.target.files));
    const drop=$("simple-media-drop");
    drop.addEventListener("dragover",e=>{e.preventDefault();drop.style.borderColor="#b9ed68"});
    drop.addEventListener("dragleave",()=>drop.style.borderColor="#526a83");
    drop.addEventListener("drop",e=>{e.preventDefault();drop.style.borderColor="#526a83";showFiles(e.dataTransfer.files)});
    let images=[];
    function render(){
      const q=$("simple-media-search").value.trim().toLowerCase();
      const matches=images.filter(p=>p.path.toLowerCase().includes(q)).slice(0,150);
      $("simple-media-count").textContent=images.length+" repository images"+(q?" — "+matches.length+" matching":"");
      $("simple-media-existing").replaceChildren();
      for(const item of matches){
        const url=base+item.path.split("/").map(encodeURIComponent).join("/");
        const card=document.createElement("div");card.style.cssText="border:1px solid #30445d;border-radius:10px;padding:10px;min-width:0";
        const image=document.createElement("img");image.src=url;image.alt=item.path;image.loading="lazy";image.style.cssText="width:100%;height:100px;object-fit:contain;background:#101d30";
        const label=document.createElement("p");label.style.cssText="font-size:11px;overflow-wrap:anywhere";label.textContent=item.path;
        const button=document.createElement("button");button.className="secondary-btn compact-btn";button.textContent="Copy URL";button.onclick=()=>copy(url);
        card.append(image,label,button);$("simple-media-existing").append(card);
      }
    }
    async function load(){
      $("simple-media-count").textContent="Loading GitHub images…";
      try{
        const r=await fetch("https://api.github.com/repos/"+owner+"/"+repository+"/git/trees/main?recursive=1");
        if(!r.ok)throw new Error("GitHub returned "+r.status);
        const data=await r.json();
        if(data.truncated)throw new Error("File listing incomplete");
        images=(data.tree||[]).filter(p=>p.type==="blob"&&/^assets\/images\/.*\.(png|jpe?g|gif|webp|avif|svg)$/i.test(p.path));
        render();
      }catch(e){$("simple-media-count").textContent="Could not load images: "+e.message}
    }
    $("simple-media-search").addEventListener("input",render);
    $("simple-media-refresh").addEventListener("click",load);
    load();
  });
})();