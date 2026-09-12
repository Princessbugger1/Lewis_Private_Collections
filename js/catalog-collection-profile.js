/* Lewis Private Collections — collection profile settings.
   Collection identity is stored separately from collectible records. */
(function(){
  'use strict';
  const KEY='lewis-collection-profile-v1';
  const defaults={name:'The Lewis Private Collection',prefix:'LPC'};
  function load(){
    try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(_){return {...defaults}}
  }
  function cleanPrefix(value){return String(value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8)}
  function save(profile){
    const next={name:String(profile.name||'').trim()||defaults.name,prefix:cleanPrefix(profile.prefix)||defaults.prefix};
    localStorage.setItem(KEY,JSON.stringify(next));
    window.dispatchEvent(new CustomEvent('cc-collection-profile-changed',{detail:next}));
    return next;
  }
  function build(){
    const settings=document.getElementById('settings');
    if(!settings||document.getElementById('ccCollectionProfile'))return;
    const profile=load(),section=document.createElement('div');
    section.id='ccCollectionProfile';section.className='cc-collection-profile';
    section.innerHTML=`<h3>Collection Profile</h3><p class="small">Information that identifies this collection.</p><div class="grid"><label>Collection Name<input id="ccCollectionName" type="text"></label><label>Catalog ID Prefix<input id="ccCatalogPrefix" type="text" maxlength="8" autocapitalize="characters" autocomplete="off"></label></div><div class="actions"><button type="button" class="secondary" id="ccSaveCollectionProfile">Save Collection Profile</button></div><p class="small" id="ccCollectionProfileStatus" aria-live="polite"></p>`;
    settings.parentNode.insertBefore(section,settings);
    const name=section.querySelector('#ccCollectionName'),prefix=section.querySelector('#ccCatalogPrefix'),status=section.querySelector('#ccCollectionProfileStatus');
    name.value=profile.name;prefix.value=profile.prefix;
    prefix.addEventListener('input',()=>{const pos=prefix.selectionStart;prefix.value=cleanPrefix(prefix.value);try{prefix.setSelectionRange(pos,pos)}catch(_){}});
    section.querySelector('#ccSaveCollectionProfile').addEventListener('click',()=>{const next=save({name:name.value,prefix:prefix.value});name.value=next.name;prefix.value=next.prefix;status.textContent='Collection Profile saved.'});
  }
  function loadCatalogIds(){if(document.querySelector('script[data-cc-catalog-ids]'))return;const s=document.createElement('script');s.src='js/catalog-item-ids.js?v=ee87de14ba';s.dataset.ccCatalogIds='1';document.body.appendChild(s)}
  function init(){build();loadCatalogIds();document.getElementById('settingsToggle')?.addEventListener('click',()=>setTimeout(build,0))}
  window.LewisCollectionProfile={load,save};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
