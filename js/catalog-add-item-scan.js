/* Add an Item launcher — keeps photo identification with the add workflow, while Research stays for manual research. */
(function(){
'use strict';
function setup(){
  if(document.getElementById('ccAddItemChoices'))return;
  const title=document.getElementById('formTitle');
  const research=document.getElementById('ccResearchSection');
  if(!title||!research)return;
  const addSection=title.closest('section.card');
  const identifyHeading=[...research.querySelectorAll('h3')].find(h=>h.textContent.trim()==='Identify a Coin');
  const identifyBlock=identifyHeading?.closest('.cc-research-block');
  if(!addSection||!identifyBlock)return;

  // Move the existing, already-tested camera/identification UI instead of duplicating it.
  const choices=document.createElement('div');
  choices.id='ccAddItemChoices';
  choices.innerHTML='<p class="small">How would you like to add this item?</p><div class="cc-add-choice-row"><button type="button" class="primary" id="ccAddScanChoice">📷 Scan / Identify Coin</button><button type="button" class="secondary" id="ccAddManualChoice">✏️ Enter Manually</button></div>';
  title.after(choices);

  const scanWrap=document.createElement('div');
  scanWrap.id='ccAddScanArea';
  scanWrap.hidden=true;
  scanWrap.appendChild(identifyBlock);
  choices.after(scanWrap);

  identifyHeading.textContent='Scan / Identify Coin';
  const intro=identifyBlock.querySelector('p.small');
  if(intro)intro.textContent="Take or choose a picture of each side. We'll use these photos to look for possible matches before anything is added.";

  const researchIntro=research.querySelector('.cc-research-intro');
  if(researchIntro)researchIntro.textContent='Research a coin yourself, check grading and value resources, and save information you trust.';

  document.getElementById('ccAddScanChoice').onclick=()=>{
    scanWrap.hidden=false;
    scanWrap.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  document.getElementById('ccAddManualChoice').onclick=()=>{
    scanWrap.hidden=true;
    const first=addSection.querySelector('.grid input,.grid select');
    first?.focus({preventScroll:true});
    first?.scrollIntoView({behavior:'smooth',block:'center'});
  };

  const style=document.createElement('style');
  style.id='ccAddItemChoicesStyle';
  style.textContent='.cc-add-choice-row{display:flex;gap:8px;flex-wrap:wrap;margin:7px 0 12px}.cc-add-choice-row button{flex:1;min-width:170px}#ccAddScanArea{border-top:1px solid #e5e7eb;margin:4px 0 14px;padding-top:4px}#ccAddScanArea .cc-research-block{border-top:0;padding-top:10px}@media(max-width:480px){.cc-add-choice-row button{width:100%;flex-basis:100%}}';
  document.head.appendChild(style);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
document.addEventListener('cc-research-ready',setup);
})();
