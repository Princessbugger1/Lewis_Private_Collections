/* TEMPORARY TEST ADAPTER — opens a targeted Google coin search from Research clues. Remove this file when real photo identification is connected. */
(function(){
'use strict';
function val(id){return (document.getElementById(id)?.value||'').trim()}
function openGoogle(){
  const parts=[val('ccResearchCountry'),val('ccResearchYear'),val('ccResearchDenom'),val('ccResearchMint'),val('ccResearchLetters'),'coin identification'].filter(Boolean);
  const q=parts.join(' ');
  const out=document.getElementById('ccResearchIdentifyStatus');
  if(!q.replace('coin identification','').trim()){
    out.hidden=false;
    out.innerHTML='<h4>Google test needs a clue</h4><p>The temporary Google test cannot examine your photographs. Open <b>Add clues</b> and enter something visible on the coin—such as a year, words, denomination, country, or mint mark—then try again.</p>';
    return;
  }
  window.open('https://www.google.com/search?q='+encodeURIComponent(q),'_blank','noopener,noreferrer');
  out.hidden=false;
  out.innerHTML='<h4>Google test opened</h4><p>This temporary test searched the clues you entered. <b>Google did not analyze your coin photos.</b> Compare the results yourself, then use Research It Yourself to bring confirmed details and a Reference Link back into the catalog.</p>';
}
function add(){
  const find=document.getElementById('ccResearchIdentify');
  if(!find||document.getElementById('ccGoogleCoinTest'))return;
  const b=document.createElement('button');
  b.type='button';b.id='ccGoogleCoinTest';b.className='secondary';b.textContent='Search Google (Test)';b.title='Temporary clue-based Google search; does not analyze the photos';
  b.onclick=openGoogle;
  find.parentElement.appendChild(b);
  const note=document.createElement('p');note.id='ccGoogleCoinTestNote';note.className='small';note.innerHTML='<b>Temporary test:</b> Google searches only the clues you type. It does not identify the photographs.';
  find.parentElement.after(note);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(add,0));else setTimeout(add,0);
document.addEventListener('cc-research-ready',add);
})();
