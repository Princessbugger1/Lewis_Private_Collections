/* Lewis Private Collections - startup persistence guard */
(() => {
  'use strict';
  const PRIMARY='lewis-private-collections-v8', MIRROR='lewis-private-collections-persistence-mirror-v1', LEGACY=['lewis-private-collections-v7'];
  const rawArray=key=>{try{const r=localStorage.getItem(key),v=r?JSON.parse(r):null;return Array.isArray(v)?v:null}catch(_){return null}};
  let recoveredRaw=null;
  try{
    const p=localStorage.getItem(PRIMARY), a=p?JSON.parse(p):null;
    if(Array.isArray(a)&&a.length) recoveredRaw=p;
    if(!recoveredRaw){try{const m=JSON.parse(localStorage.getItem(MIRROR)||'null');const v=m&&typeof m.raw==='string'?JSON.parse(m.raw):null;if(Array.isArray(v)&&v.length)recoveredRaw=m.raw}catch(_){}
    }
    if(!recoveredRaw)for(const k of LEGACY){const v=rawArray(k);if(v&&v.length){recoveredRaw=JSON.stringify(v);break}}
    if(recoveredRaw&&(!a||!a.length))localStorage.setItem(PRIMARY,recoveredRaw);
  }catch(_){}
  try{
    const get=Storage.prototype.getItem;
    Storage.prototype.getItem=function(key){const v=get.call(this,key);if(this===localStorage&&key===PRIMARY&&(!v||v==='[]')&&recoveredRaw)return recoveredRaw;return v};
    const set=Storage.prototype.setItem;
    Storage.prototype.setItem=function(key,value){const result=set.call(this,key,value);if(this===localStorage&&key===PRIMARY){try{const a=JSON.parse(value);if(Array.isArray(a)&&a.length){recoveredRaw=value;set.call(this,MIRROR,JSON.stringify({savedAt:new Date().toISOString(),raw:value}))}}catch(_){} }return result};
  }catch(_){}
})();
