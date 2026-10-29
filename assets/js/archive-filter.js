(() => {
  function init(){
    const root=document.querySelector(".mt-archive");if(!root)return;
    const search=document.getElementById("mt-archive-search"),year=document.getElementById("mt-archive-year"),topic=document.getElementById("mt-archive-topic");
    const entries=Array.from(root.querySelectorAll(".mt-archive-entry"));
    const headings=Array.from(root.querySelectorAll(".mt-archive-year"));
    const count=document.getElementById("mt-archive-count"),empty=document.getElementById("mt-archive-empty"),more=document.getElementById("mt-archive-more");
    let limit=30;
    function update(){
      const query=search.value.trim().toLocaleLowerCase(),y=year.value,t=topic.value;
      let matched=0;const visibleYears=new Set();
      for(const entry of entries){
        const matches=(!query||entry.dataset.search.includes(query))&&(!y||entry.dataset.year===y)&&(!t||entry.dataset.topics.split("|").includes(t));
        if(matches)matched++;
        entry.hidden=!matches||matched>limit;
        if(!entry.hidden)visibleYears.add(entry.dataset.year);
      }
      headings.forEach(h=>h.hidden=!visibleYears.has(h.dataset.yearHeading));
      count.textContent=matched+" matching posts · showing "+Math.min(matched,limit)+" of "+entries.length+" total";
      empty.hidden=matched!==0;more.hidden=matched<=limit;
    }
    [search,year,topic].forEach(el=>el.addEventListener(el===search?"input":"change",()=>{limit=30;update()}));
    document.getElementById("mt-archive-clear").addEventListener("click",()=>{search.value="";year.value="";topic.value="";limit=30;update()});
    more.addEventListener("click",()=>{limit+=30;update()});
    update();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();