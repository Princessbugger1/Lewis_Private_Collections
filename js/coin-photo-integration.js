/* Coin Chime — preserve one original photo per slot; crops are temporary/display only. */
(function(){
  'use strict';
  const IDS=['photo1','photo2','photo3'];
  const TITLES=['Obverse / Face','Reverse','Edge'];
  const originals={};
  function readFile(input){const f=input?.files?.[0];if(!f)return Promise.resolve(null);return new Promise(r=>{const q=new FileReader();q.onload=()=>r(q.result);q.onerror=()=>r(null);q.readAsDataURL(f);});}
  function open(index,dataUrl){if(!dataUrl||!window.CoinChimePhotoEditor)return;const original=originals[index]||dataUrl;window.CoinChimePhotoEditor.open(dataUrl,result=>{const preview=document.getElementById(`preview${index+1}`);if(preview){preview.src=result;preview.hidden=false;preview.dataset.cropped='1';}},TITLES[index],()=>{const preview=document.getElementById(`preview${index+1}`);if(preview){preview.src=original;preview.hidden=false;preview.dataset.cropped='0';}} ,()=>{const preview=document.getElementById(`preview${index+1}`);if(preview){preview.src=original;preview.hidden=false;preview.dataset.cropped='0';}});}
  function wire(index){const input=document.getElementById(IDS[index]),preview=document.getElementById(`preview${index+1}`);if(!input||!preview||input.dataset.ccWired)return;input.dataset.ccWired='1';input.addEventListener('change',async()=>{const d=await readFile(input);if(d){originals[index]=d;preview.src=d;preview.hidden=false;open(index,d);}});preview.addEventListener('click',()=>{const d=originals[index]||preview.src;if(d)open(index,d);});preview.style.cursor='zoom-in';preview.title=`${TITLES[index]} — tap to inspect, zoom, or crop`}
  function init(){IDS.forEach((_,i)=>wire(i));}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  const watch=new MutationObserver(()=>IDS.forEach((_,i)=>wire(i)));watch.observe(document.body,{childList:true,subtree:true});
})();
