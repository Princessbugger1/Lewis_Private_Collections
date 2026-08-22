/* Coin Chime — one preserved original + one current display crop per photo slot. */
(function(){
  'use strict';
  const IDS=['photo1','photo2','photo3'];
  const TITLES=['Obverse / Face','Reverse','Edge'];
  const KEY='lewis-private-collections-v8';
  const originals=[null,null,null];
  const displays=[null,null,null];
  let activeIndex=null;
  let wrapping=false;

  function readFile(input){
    const f=input?.files?.[0];
    if(!f)return Promise.resolve(null);
    return new Promise(r=>{const q=new FileReader();q.onload=()=>r(q.result);q.onerror=()=>r(null);q.readAsDataURL(f);});
  }
  function dataUrlToFile(dataUrl,index){
    const p=dataUrl.split(',');
    const mime=(p[0].match(/data:([^;]+)/)||[])[1]||'image/jpeg';
    const b=atob(p[1]);const a=new Uint8Array(b.length);
    for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);
    return new File([a],`coin-photo-${index+1}.jpg`,{type:mime});
  }
  function putFile(input,dataUrl,index){
    try{const t=new DataTransfer();t.items.add(dataUrlToFile(dataUrl,index));input.files=t.files;return true;}catch(_){return false;}
  }
  function loadItems(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(_){return[]}}
  function saveItems(items){localStorage.setItem(KEY,JSON.stringify(items));try{localStorage.setItem('lewis-private-collections-backup-v1',JSON.stringify(items))}catch(_){}}
  function clearState(){for(let i=0;i<3;i++){originals[i]=null;displays[i]=null;}activeIndex=null;}

  function hydrateFromItem(index){
    const items=loadItems(),item=items[index];if(!item)return;
    const o=item.photoOriginals||item.photos||[];
    const d=item.photos||[];
    for(let i=0;i<3;i++){originals[i]=o[i]||d[i]||null;displays[i]=d[i]||o[i]||null;}
  }

  function openEditor(index){
    const original=originals[index]||displays[index];
    if(!original||!window.CoinChimePhotoEditor)return;
    window.CoinChimePhotoEditor.open(
      original,
      result=>{
        displays[index]=result;
        const preview=document.getElementById(`preview${index+1}`);
        if(preview){preview.src=result;preview.hidden=false;preview.dataset.cropped='1';}
      },
      TITLES[index],
      ()=>{
        displays[index]=original;
        const preview=document.getElementById(`preview${index+1}`);
        if(preview){preview.src=original;preview.hidden=false;preview.dataset.cropped='0';}
      }
    );
  }

  function wire(index){
    const input=document.getElementById(IDS[index]),preview=document.getElementById(`preview${index+1}`);
    if(!input||!preview||input.dataset.ccWired)return;
    input.dataset.ccWired='1';
    input.addEventListener('change',async()=>{
      const d=await readFile(input);
      if(!d)return;
      originals[index]=d;
      displays[index]=d;
      preview.src=d;preview.hidden=false;preview.dataset.cropped='0';
      openEditor(index);
    });
    preview.addEventListener('click',()=>openEditor(index));
    preview.style.cursor='zoom-in';
    preview.title=`${TITLES[index]} — tap to inspect, zoom, or crop`;
  }

  function trackOpenItem(){
    const records=document.getElementById('records');
    if(!records||records.dataset.ccTrack)return;
    records.dataset.ccTrack='1';
    records.addEventListener('click',e=>{
      const b=e.target.closest('button[data-edit]');if(!b)return;
      activeIndex=Number(b.dataset.edit);
      setTimeout(()=>{
        hydrateFromItem(activeIndex);
        for(let i=0;i<3;i++){
          const p=document.getElementById(`preview${i+1}`);
          if(p&&displays[i]){p.src=displays[i];p.hidden=false;}
        }
      },0);
    },true);
  }

  function wrapSave(){
    const btn=document.getElementById('saveBtn');
    if(!btn||btn.dataset.ccWrapped||typeof btn.onclick!=='function')return;
    btn.dataset.ccWrapped='1';
    const originalHandler=btn.onclick;
    btn.onclick=async function(){
      if(wrapping)return;
      wrapping=true;
      const targetIndex=Number.isInteger(activeIndex)?activeIndex:null;
      for(let i=0;i<3;i++){
        const input=document.getElementById(IDS[i]);
        if(input&&displays[i])putFile(input,displays[i],i);
      }
      try{await originalHandler.call(this);}finally{
        const items=loadItems();
        const savedIndex=targetIndex!==null?targetIndex:0;
        const item=items[savedIndex];
        if(item){
          const priorOriginals=item.photoOriginals||[];
          item.photoOriginals=[0,1,2].map(i=>originals[i]||priorOriginals[i]||item.photos?.[i]||null);
          item.photos=[0,1,2].map(i=>displays[i]||item.photos?.[i]||item.photoOriginals[i]||null);
          saveItems(items);
        }
        clearState();
        wrapping=false;
        try{window.dispatchEvent(new Event('storage'));}catch(_){}
      }
    };
  }

  function addListThumbs(){
    const items=loadItems(),cards=[...document.querySelectorAll('#records .record')];
    cards.forEach(card=>card.querySelector('.cc-list-thumb')?.remove());
    cards.forEach(card=>{
      const edit=card.querySelector('button[data-edit]');if(!edit)return;
      const idx=Number(edit.dataset.edit),src=items[idx]?.photos?.[0];if(!src)return;
      const img=document.createElement('img');
      img.className='cc-list-thumb';img.src=src;img.alt='Coin thumbnail';img.loading='lazy';
      img.style.cssText='width:72px;height:72px;object-fit:contain;background:#f8fafc;border-radius:9px;float:left;margin:0 10px 7px 0;border:1px solid #e5e7eb;';
      card.prepend(img);
    });
  }

  function init(){IDS.forEach((_,i)=>wire(i));trackOpenItem();wrapSave();addListThumbs();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  const watch=new MutationObserver(()=>{IDS.forEach((_,i)=>wire(i));trackOpenItem();wrapSave();addListThumbs();});
  watch.observe(document.body,{childList:true,subtree:true});
})();
