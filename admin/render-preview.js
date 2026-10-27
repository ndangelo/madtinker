(function(){
"use strict";
function escapeHtml(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function toHtml(source){
 const t=String(source||"");
 if(/^\s*<!doctype\s+html|^\s*<html[\s>]/i.test(t))return t;
 return t.split(/\n\s*\n/).map(block=>{
 const b=block.trim();if(!b)return "";
 if(/^<\w|^<!--/.test(b))return b;
 const inline=s=>escapeHtml(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g,'<img alt="$1" src="$2">').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2">$1</a>');
 if(/^#{1,6}\s/.test(b)){const m=b.match(/^(#{1,6})\s+([\s\S]*)$/);return "<h"+m[1].length+">"+inline(m[2])+"</h"+m[1].length+">";}
 if(/^[-*]\s/m.test(b))return "<ul>"+b.split("\n").filter(x=>/^[-*]\s/.test(x)).map(x=>"<li>"+inline(x.replace(/^[-*]\s+/,""))+"</li>").join("")+"</ul>";
 return "<p>"+inline(b).replace(/\n/g,"<br>")+"</p>";
 }).join("\n");
}
window.studioRenderPreview=function(source,options={}){
 let html=toHtml(source);
 if(options.articleOnly && /^\\s*<!doctype\\s+html|^\\s*<html[\\s>]/i.test(html)){
   try{
     const documentCopy=new DOMParser().parseFromString(html,"text/html");
     const article=documentCopy.querySelector(".noj-entry-content, .entry-content, .post-content, article, main");
     if(article){
       const styles=Array.from(documentCopy.querySelectorAll("style")).map(node=>node.outerHTML).join("\\n");
       const title=documentCopy.querySelector("article h1, main h1, h1");
       html=styles+"<main>"+(title?title.outerHTML:"")+article.innerHTML+"</main>";
     }
   }catch(error){/* Full-page preview remains available. */}
 }

 const policy='<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; img-src https: data:; style-src \'unsafe-inline\' https:; font-src https: data:; base-uri \'none\'; form-action \'none\'; frame-src \'none\'; connect-src \'none\'">';
 const style="<style>body{font-family:system-ui,sans-serif;color:#222;margin:24px;line-height:1.6;overflow-wrap:anywhere}img,video{max-width:100%;height:auto}pre{white-space:pre-wrap}</style>";
 // Inert preview: script execution is disabled by the iframe sandbox and CSP.
 return policy+style+html;
};
})();