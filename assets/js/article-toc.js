(() => {
  function init(){
    const article=document.getElementById("mt-article-content");
    const nav=document.getElementById("mt-toc-links");
    const toc=document.querySelector(".mt-toc");
    if(!article||!nav||!toc)return;
    const headings=Array.from(article.querySelectorAll("h2,h3"));
    const used=new Set(Array.from(document.querySelectorAll("[id]")).map(el=>el.id));
    headings.forEach((heading,index)=>{
      if(!heading.textContent.trim())return;
      if(!heading.id){
        const base=heading.textContent.trim().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"section";
        let id=base,n=2;while(used.has(id))id=base+"-"+n++;
        heading.id=id;used.add(id);
      }
      const link=document.createElement("a");link.href="#"+encodeURIComponent(heading.id);link.textContent=heading.textContent.trim();
      if(heading.tagName==="H3")link.className="mt-toc-sub";
      nav.append(link);
    });
    if(!nav.children.length){toc.classList.add("is-empty")}
    const toggle=document.querySelector(".mt-toc-toggle");
    toggle?.addEventListener("click",()=>{
      const open=!toc.querySelector(".mt-toc-inner").classList.contains("is-open");
      toc.querySelector(".mt-toc-inner").classList.toggle("is-open",open);
      toggle.setAttribute("aria-expanded",String(open));
    });
    nav.addEventListener("click",e=>{if(e.target.closest("a")&&window.matchMedia("(max-width:760px)").matches){toc.querySelector(".mt-toc-inner").classList.remove("is-open");toggle?.setAttribute("aria-expanded","false")}});
    if("IntersectionObserver" in window){
      const links=Array.from(nav.querySelectorAll("a"));
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.removeAttribute("aria-current"));const link=links.find(a=>decodeURIComponent(a.hash.slice(1))===entry.target.id);link?.setAttribute("aria-current","location")}})
      },{rootMargin:"-10% 0px -75% 0px"});
      headings.forEach(h=>observer.observe(h));
    }
    const copy=document.querySelector(".mt-copy-link");
    copy?.addEventListener("click",async()=>{
      try{await navigator.clipboard.writeText(window.location.href);copy.textContent="Copied ✓"}
      catch(e){copy.textContent="Select address bar to copy"}
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();