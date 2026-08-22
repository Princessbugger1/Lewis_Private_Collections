/* Coin Chime — safe mobile photo editing for all three coin photos. */
(function(){
  'use strict';
  const IDS=['photo1','photo2','photo3'];
  const TITLES=['Obverse / Face','Reverse','Edge'];
  const KEY='lewis-private-collections-v8';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function fileFromData(dataUrl,index){const p=dataUrl.split(',');const mime=(p[0].match(/data:([^;]+)/)||[])[1]||'image/jpeg';const b=atob(p[1]);const a=new Uint8Array(b.length);for(let i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return new File([a],`coin-photo-${index+1}.jpg`,{type:mime});}
  function setFile(input,dataUrl,index){try{const t=new DataTransfer();t.items.add(fileFromData(dataUrl,index));input.files=t.files;return true;}catch(_){return false;}}
  function readFile(input){const f=input?.files?.[0];if(!f)return Promise.resolve(null);return new Promise(r=>{const q=new FileReader();q.onload=()=>r(q.result);q.onerror=()=>r(null);q.readAsDataURL(f);});}
  function open(index,dataUrl){if(!dataUrl||!window.CoinChimePhotoEditor)return;window.CoinChimePhotoEditor.open(dataUrl,result=>{const input=document.getElementById(IDS[index]),preview=document.getElementById(`preview${index+1}`);if(!input||!preview)return;if(setFile(input,result,index)){preview.src=result;preview.hidden=false;preview.dataset.cropped='1';}},TITLES[index]);}
  function wire(index){const input=document.getElementById(IDS[index]),preview=document.getElementById(`preview${index+1}`);if(!input||!preview||input.dataset.ccWired)return;input.dataset.ccWired='1';input.addEventListener('change',async()=>{const d=await readFile(input);if(d)open(index,d);});preview.addEventListener('click',()=>{if(preview.src&&!preview.hidden)open(index,preview.src);});preview.style.cursor='zoom-in';preview.title=`${TITLES[index]} — tap to inspect, zoom, or crop`;}
  function addListThumbs(){
    let items=[];try{items=JSON.parse(localStorage.getItem(KEY)||'[]')}catch(_){return;}
    const records=[...document.querySelectorAll('#records .record')];if(!records.length)return;
    const unused=new Set(items.map((_,i)=>i));
    records.forEach(card=>{
      if(card.querySelector('.cc-list-thumb'))return;
      const text=(card.textContent||'').toLowerCase();let best=-1,score=-1;
      unused.forEach(i=>{const it=items[i]||{},parts=[it.type,it.country,it.year,it.mint,it.denom].filter(Boolean).map(String);let s=0;parts.forEach(p=>{if(p&&text.includes(p.toLowerCase()))s+=p.length>2?2:1;});if(s>score){score=s;best=i;}});
      if(best<0)return;const src=items[best]?.photos?.[0];if(!src)return;unused.delete(best);
      const img=document.createElement('img');img.className='cc-list-thumb';img.src=src;img.alt='Coin thumbnail';img.loading='lazy';img.style.cssText='width:74px;height:74px;object-fit:contain;background:#f8fafc;border-radius:9px;float:left;margin:0 10px 7px 0;border:1px solid #e5e7eb;cursor:zoom-in;';img.onclick=e=>{e.stopPropagation();open(0,src);};card.prepend(img);
    });
  }
  function init(){IDS.forEach((_,i)=>wire(i));addListThumbs();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  const watch=new MutationObserver(()=>{IDS.forEach((_,i)=>wire(i));addListThumbs();});watch.observe(document.body,{childList:true,subtree:true});
})();
