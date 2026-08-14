(()=>{
'use strict';
function initResearchDisclaimer(){
 if(document.getElementById('researchDisclaimer'))return;
 const target=document.querySelector('main'); if(!target)return;
 const card=document.createElement('section');
 card.id='researchDisclaimer'; card.className='card';
 card.innerHTML='<h2>Research notice</h2><p class="small">Coin, token, medal, paper-money, and counterfeit research may use outside reference sources. Research results are suggestions and may be incomplete or incorrect. Verify important details against the physical item and trusted references before saving them to your collection.</p><p class="small"><b>Image research is not authentication or professional grading.</b> A result may flag a piece as potentially counterfeit, but it does not by itself prove authenticity, counterfeit status, or grade.</p>';
 target.insertBefore(card,target.firstChild);
}
const mo=new MutationObserver(initResearchDisclaimer);mo.observe(document.body,{childList:true,subtree:true});initResearchDisclaimer();
})();
