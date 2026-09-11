/* TEMPORARY RESEARCH HELPER — clue-based Google search. Kept separate so it can be removed/replaced later. */
(function(){
'use strict';
function val(id){return (document.getElementById(id)?.value||'').trim()}
function openGoogle(){
  const parts=[val('ccGoogleResearchQuery'),'coin'].filter(Boolean);
  const out=document.getElementById('ccGoogleResearchStatus');
  if(!val('ccGoogleResearchQuery')){
    out.hidden=false;
    out.innerHTML='<p>Type something you know about the coin first—for example <b>half dollar</b>, <b>1950 penny</b>, or visible words and letters.</p>';
    return;
  }
  window.open('https://www.google.com/search?q='+encodeURIComponent(parts.join(' ')),'_blank','noopener,noreferrer');
  out.hidden=false;
  out.innerHTML='<p>Google opened your coin research in a new tab. When you find reliable details, you can enter them in <b>Research It Yourself</b> below and include the source as a Reference Link.</p>';
}
function add(){
  const researchHeading=[...document.querySelectorAll('#ccResearchSection h3')].find(h=>h.textContent.trim()==='Research It Yourself');
  if(!researchHeading||document.getElementById('ccGoogleResearchBox'))return;
  const block=researchHeading.closest('.cc-research-block');
  if(!block)return;
  const box=document.createElement('div');
  box.id='ccGoogleResearchBox';
  box.className='cc-google-research';
  box.innerHTML='<h4>Research a Coin</h4><p class="small">Search by anything you already know about the coin. This is for research—not photo identification.</p><div class="cc-google-research-row"><input id="ccGoogleResearchQuery" type="search" placeholder="e.g. half dollar, 1950 penny, visible lettering"><button type="button" class="secondary" id="ccGoogleResearchButton">Search Google</button></div><div id="ccGoogleResearchStatus" class="cc-id-result" hidden></div>';
  block.insertBefore(box,researchHeading.nextElementSibling);
  document.getElementById('ccGoogleResearchButton').onclick=openGoogle;
  document.getElementById('ccGoogleResearchQuery').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();openGoogle()}});
  if(!document.getElementById('ccGoogleResearchStyle')){
    const style=document.createElement('style');style.id='ccGoogleResearchStyle';style.textContent='.cc-google-research{border:1px solid #e5e7eb;border-radius:10px;padding:10px;margin:8px 0 14px}.cc-google-research h4{margin:0 0 5px}.cc-google-research-row{display:flex;gap:7px;align-items:center}.cc-google-research-row input{flex:1;min-width:0}@media(max-width:520px){.cc-google-research-row{flex-direction:column;align-items:stretch}}';document.head.appendChild(style);
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(add,0));else setTimeout(add,0);
document.addEventListener('cc-research-ready',add);
})();
