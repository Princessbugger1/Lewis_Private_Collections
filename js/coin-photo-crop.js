/* Coin Chime — precise image crop utility. */
(function(){
  'use strict';
  const MAX_OUTPUT=1600,JPEG_QUALITY=.88;
  function cropImage(dataUrl,crop,rotation=0){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>{const x=Math.max(0,Math.min(image.naturalWidth-1,Number(crop.x)||0)),y=Math.max(0,Math.min(image.naturalHeight-1,Number(crop.y)||0)),w=Math.max(1,Math.min(image.naturalWidth-x,Number(crop.width)||image.naturalWidth)),h=Math.max(1,Math.min(image.naturalHeight-y,Number(crop.height)||image.naturalHeight));const scale=Math.min(1,MAX_OUTPUT/Math.max(w,h));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(w*scale));canvas.height=Math.max(1,Math.round(h*scale));const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)return reject(new Error('Canvas unavailable'));ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.save();ctx.translate(canvas.width/2,canvas.height/2);ctx.rotate((rotation%360)*Math.PI/180);ctx.drawImage(image,x,y,w,h,-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);ctx.restore();resolve(canvas.toDataURL('image/jpeg',JPEG_QUALITY));};image.onerror=reject;image.src=dataUrl;});}
  window.CoinChimePhotoCrop={cropImage,MAX_OUTPUT,JPEG_QUALITY};
})();
