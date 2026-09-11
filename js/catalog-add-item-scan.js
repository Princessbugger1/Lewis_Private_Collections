/* Add an Item launcher — keeps photo identification with the add workflow, while Research stays for manual research. */
(function(){
'use strict';
const DRAFT_KEY='lewis-private-collections-drafts-v1';
const FORM_IDS=['category','country','type','denom','year','mint','series','grade','variety','quantity','composition','purchase','value','collection','location','notes','pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer','coaIssuer','coaNumber','coaNotes','certService','certNumber','certGrade','certUrl','referenceLink'];
const STATE_IDS=['coaState','proofState','commemorativeState'];
function readDrafts(){try{const v=JSON.parse(localStorage.getItem(DRAFT_KEY)||'[]');return Array.isArray(v)?v:[]}catch(e){return []}}
function writeDrafts(v){localStorage.setItem(DRAFT_KEY,JSON.stringify(v))}
function snapshotForm(){const data={};FORM_IDS.forEach(id=>{const n=document.getElementById(id);if(n)data[id]=n.value});STATE_IDS.forEach(id=>{const n=document.getElementById(id);if(n)data[id]={v:n.dataset.v||'0',text:n.textContent}});data.photos=[1,2,3].map(i=>{const p=document.getElementById('preview'+i);return p&&!p.hidden&&p.src?p.src:''});return data}
function draftCandidate(data){return {country:data.country||'',year:data.year||'',denomination:data.denom||'',type:data.type||'',mint:data.mint||'',variety:data.variety||'',title:[data.year,data.country,data.denom].filter(Boolean).join(' ')||'Untitled Draft'}}
function saveFullDraft(){const data=snapshotForm(),drafts=readDrafts();drafts.unshift({id:'draft-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString(),candidate:draftCandidate(data),referenceLink:data.referenceLink||'',formData:data});writeDrafts(drafts);document.dispatchEvent(new CustomEvent('cc-open-section',{detail:{type:'drafts'}}))}
function restoreFullDraft(d){const data=d?.formData;if(!data)return;FORM_IDS.forEach(id=>{const n=document.getElementById(id);if(n&&data[id]!=null){n.value=data[id];n.dispatchEvent(new Event('input',{bubbles:true}));n.dispatchEvent(new Event('change',{bubbles:true}))}});STATE_IDS.forEach(id=>{const n=document.getElementById(id),s=data[id];if(n&&s){n.dataset.v=s.v||'0';n.textContent=s.text||'❓'}});(data.photos||[]).forEach((src,i)=>{const p=document.getElementById('preview'+(i+1));if(p&&src){p.src=src;p.hidden=false}})}
function addDraftButton(){const save=document.getElementById('saveBtn'),clear=document.getElementById('clearBtn');if(!save||!clear||document.getElementById('ccSaveDraftBtn'))return;const b=document.createElement('button');b.type='button';b.id='ccSaveDraftBtn';b.className='secondary';b.textContent='Save as Draft';b.onclick=saveFullDraft;save.insertAdjacentElement('afterend',b)}
function addResearchDraftButton(){const review=document.getElementById('ccManualUse');if(!review||document.getElementById('ccManualDraft'))return;const b=document.createElement('button');b.type='button';b.id='ccManualDraft';b.className='secondary';b.textContent='Save as Draft';b.onclick=()=>{const get=id=>document.getElementById(id)?.value.trim()||'',candidate={country:get('ccManualCountry'),type:get('ccManualType'),denomination:get('ccManualDenom'),year:get('ccManualYear'),mint:get('ccManualMint'),variety:get('ccManualVariety'),referenceUrl:get('ccManualReference')};candidate.title=[candidate.year,candidate.country,candidate.denomination].filter(Boolean).join(' ')||candidate.type||'Untitled Draft';const drafts=readDrafts();drafts.unshift({id:'draft-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString(),candidate,referenceLink:candidate.referenceUrl||''});writeDrafts(drafts);document.dispatchEvent(new CustomEvent('cc-open-section',{detail:{type:'drafts'}}))};review.insertAdjacentElement('afterend',b)}
function bindDraftRestore(){if(document.documentElement.dataset.ccFullDraftBound)return;document.documentElement.dataset.ccFullDraftBound='1';document.addEventListener('click',e=>{const b=e.target.closest('#ccDraftList [data-continue]');if(!b)return;const id=b.closest('[data-id]')?.dataset.id,d=readDrafts().find(x=>x.id===id);if(d?.formData)setTimeout(()=>restoreFullDraft(d),30)},true)}
function setup(){
  const title=document.getElementById('formTitle');
  const research=document.getElementById('ccResearchSection');
  if(!title||!research)return;
  addDraftButton();addResearchDraftButton();bindDraftRestore();
  if(document.getElementById('ccAddItemChoices'))return;
  const addSection=title.closest('section.card');
  const identifyHeading=[...research.querySelectorAll('h3')].find(h=>h.textContent.trim()==='Identify a Coin');
  const identifyBlock=identifyHeading?.closest('.cc-research-block');
  if(!addSection||!identifyBlock)return;
  const choices=document.createElement('div');choices.id='ccAddItemChoices';choices.innerHTML='<p class="small">How would you like to add this item?</p><div class="cc-add-choice-row"><button type="button" class="primary" id="ccAddScanChoice">📷 Scan / Identify Coin</button><button type="button" class="primary" id="ccAddManualChoice">✏️ Enter Manually</button></div>';title.after(choices);
  const scanWrap=document.createElement('div');scanWrap.id='ccAddScanArea';scanWrap.hidden=true;scanWrap.appendChild(identifyBlock);choices.after(scanWrap);
  identifyHeading.textContent='Scan / Identify Coin';const intro=identifyBlock.querySelector('p.small');if(intro)intro.textContent="Take or choose a picture of each side. We'll use these photos to look for possible matches before anything is added.";
  const researchIntro=research.querySelector('.cc-research-intro');if(researchIntro)researchIntro.textContent='Research a coin yourself, check grading and value resources, and save information you trust.';
  document.getElementById('ccAddScanChoice').onclick=()=>{scanWrap.hidden=false;scanWrap.scrollIntoView({behavior:'smooth',block:'nearest'})};
  document.getElementById('ccAddManualChoice').onclick=()=>{scanWrap.hidden=true;const first=addSection.querySelector('.grid input,.grid select');first?.focus({preventScroll:true});first?.scrollIntoView({behavior:'smooth',block:'center'})};
  const style=document.createElement('style');style.id='ccAddItemChoicesStyle';style.textContent='.cc-add-choice-row{display:flex;gap:8px;flex-wrap:wrap;margin:7px 0 12px}.cc-add-choice-row button{flex:1;min-width:170px}#ccAddScanArea{border-top:1px solid #e5e7eb;margin:4px 0 14px;padding-top:4px}#ccAddScanArea .cc-research-block{border-top:0;padding-top:10px}@media(max-width:480px){.cc-add-choice-row button{width:100%;flex-basis:100%}}';document.head.appendChild(style)
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
document.addEventListener('cc-research-ready',setup);
})();
