(()=>{
'use strict';
const $=id=>document.getElementById(id);
const paperIds=['pSeries','pSerial','pStar','pSignatures','pPrinting','pErrors','pIssuer'];
const PHOTO_IDS=['photo1','photo2','photo3'];
function addMobilePhotoLayout(){
  if(document.getElementById('mobilePhotoDeleteLayout'))return;
  const style=document.createElement('style');
  style.id='mobilePhotoDeleteLayout';
  style.textContent='@media(max-width:600px){body[data-display-mode="phone"] .photoBox label{display:block}body[data-display-mode="phone"] .photoBox input[type="file"]{display:block!important;width:100%!important;margin-top:4px}body[data-display-mode="phone"] .photoBox [data-photo-delete]{display:flex!important;width:auto!important;max-width:none!important;margin:7px auto 0!important;box-sizing:border-box;position:static!important;float:none!important;clear:both!important}}';
  document.head.appendChild(style);
}
function removePaperNotesSetting(){
  const box=$('settings');
  if(!box)return;
  [...box.querySelectorAll('.settings-row')].forEach(row=>{
    const label=row.querySelector('span');
    if(label&&label.textContent.trim()==='Paper Notes details')row.remove();
  });
}
function movePaperNotesSection(){
  const section=$('paperMoneySection'),category=$('category');
  if(!section||!category)return;
  const categoryLabel=category.closest('label');
  const grid=categoryLabel?.parentElement;
  if(!categoryLabel||!grid)return;
  if(section.parentElement!==grid||section.previousElementSibling!==categoryLabel)categoryLabel.after(section);
  section.classList.add('wide');
  section.style.margin='0';
  section.style.padding='10px';
  section.style.background='#f9fafb';
}
function hasPaperNotesData(){return paperIds.some(id=>String($(id)?.value||'').trim()!=='');}
function updateVisibility(){
  const section=$('paperMoneySection'),category=$('category');
  if(!section||!category)return;
  const isPaper=category.value==='Paper Notes';
  section.classList.toggle('hidden-section',!isPaper&&!hasPaperNotesData());
}
function updateSaveButton(){
  const btn=$('saveBtn');
  if(!btn)return;
  const t=btn.textContent.trim();
  if(t==='Save changes'||t==='Save Changes'||t==='Save Changes / Exit'||t==='Save / Exit')btn.textContent='Save / Exit';
}
function photoSignature(){
  return ['category','country','type','denom','year','mint','series','grade','variety','quantity','composition','purchase','value','collection','location'].map(id=>String($(id)?.value||'').trim()).join('\u001f');
}
function findPhotoSource(i){
  const p=$('preview'+(i+1));
  if(p&&!p.hidden&&p.src)return p.src;
  return '';
}
function installPhotoControls(){
  PHOTO_IDS.forEach((id,i)=>{
    const input=$(id),preview=$('preview'+(i+1));
    if(!input||!preview)return;
    const parent=input.parentElement;
    if(!parent)return;
    let btn=parent.querySelector('[data-photo-delete="'+i+'"]');
    const hasPhoto=!!(preview.src&&!preview.hidden);
    if(!hasPhoto){if(btn)btn.remove();input.style.width='100%';input.style.display='block';return;}
    if(btn)return;
    btn=document.createElement('button');
    btn.type='button';
    btn.dataset.photoDelete=String(i);
    btn.textContent='🗑️ Delete';
    btn.title='Delete this photo';
    btn.style.cssText='display:inline-flex;width:auto;min-width:0;max-width:88px;box-sizing:border-box;align-items:center;justify-content:center;white-space:nowrap;margin:4px 0 0 4px;padding:5px 7px;font-size:11px;line-height:1.1;background:#fee2e2;color:#991b1b;border-radius:8px;vertical-align:middle;';
    input.style.width='calc(100% - 96px)';
    input.style.display='inline-block';
    input.style.verticalAlign='middle';
    btn.addEventListener('click',()=>{
      const oldSrc=findPhotoSource(i);
      if(!oldSrc)return;
      if(!confirm('Are you sure you want to delete this photo?\n\nChoose Keep to leave it alone, or Delete to remove it.'))return;
      const pending=JSON.parse(sessionStorage.getItem('lewis-photo-deletes')||'[]');
      pending.push({index:i,src:oldSrc,signature:photoSignature()});
      sessionStorage.setItem('lewis-photo-deletes',JSON.stringify(pending));
      input.value='';
      preview.src='';
      preview.hidden=true;
      btn.remove();
      input.style.width='100%';
      input.style.display='block';
    });
    parent.appendChild(btn);
  });
}
function applyPendingPhotoDeletes(){
  const raw=sessionStorage.getItem('lewis-photo-deletes');
  if(!raw)return;
  sessionStorage.removeItem('lewis-photo-deletes');
  let pending=[];try{pending=JSON.parse(raw)}catch(e){return;}
  setTimeout(()=>{
    let items;try{items=JSON.parse(localStorage.getItem('lewis-private-collections-v8')||'[]')}catch(e){return;}
    let changed=false;
    pending.forEach(d=>{
      let candidates=items.filter(x=>Array.isArray(x.photos)&&x.photos[d.index]===d.src);
      if(d.signature){
        const keys=['category','country','type','denom','year','mint','series','grade','variety','quantity','composition','purchase','value','collection','location'];
        const exact=candidates.filter(x=>keys.map(k=>String(x[k]??'').trim()).join('\u001f')===d.signature);
        if(exact.length)candidates=exact;
      }
      if(candidates.length===1){
        const item=candidates[0];
        item.photos[d.index]='';
        changed=true;
      }
    });
    if(changed){
      localStorage.setItem('lewis-private-collections-v8',JSON.stringify(items));
      try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(items))}catch(e){}
      location.reload();
    }
  },0);
}
function bind(){
  const category=$('category');
  if(category&&!category.dataset.paperNotesBound){
    category.dataset.paperNotesBound='1';
    category.addEventListener('change',()=>{movePaperNotesSection();updateVisibility();});
  }
  paperIds.forEach(id=>$(id)?.addEventListener('input',updateVisibility));
  PHOTO_IDS.forEach(id=>$(id)?.addEventListener('change',()=>setTimeout(installPhotoControls,0)));
  const save=$('saveBtn');
  if(save&&!save.dataset.photoDeleteSaveBound){
    save.dataset.photoDeleteSaveBound='1';
    save.addEventListener('click',applyPendingPhotoDeletes,true);
  }
}
function init(){
  addMobilePhotoLayout();
  movePaperNotesSection();
  removePaperNotesSetting();
  bind();
  updateVisibility();
  updateSaveButton();
  installPhotoControls();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
