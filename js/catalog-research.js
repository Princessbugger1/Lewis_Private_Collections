/* Lewis Private Collections — Research reference center. */
(function(){
'use strict';
const links={
 grading:[['PCGS','https://www.pcgs.com/'],['NGC','https://www.ngccoin.com/'],['ANACS','https://anacs.com/'],['ICG','https://www.icgcoin.com/'],['CACG','https://www.cacgrading.com/'],['SEGS','https://www.segsgrading.com/']],
 values:[['Greysheet','https://www.greysheet.com/'],['Greensheet','https://www.greysheet.com/publications/greensheet'],['Red Book','https://whitman.com/series/official-red-book/'],['Blue Book','https://whitman.com/series/official-blue-book/']],
 official:[['United States Mint','https://www.usmint.gov/']]
};
function cards(list){return list.map(([name,url])=>`<a class="cc-research-link" href="${url}" target="_blank" rel="noopener noreferrer">${name}<span>Visit official site ↗</span></a>`).join('')}
function build(){
 if(document.getElementById('ccResearchSection'))return;
 const main=document.querySelector('main'); if(!main)return;
 const section=document.createElement('section');
 section.id='ccResearchSection'; section.className='card'; section.style.display='none';
 section.innerHTML=`<h2>Research</h2>
 <p class="cc-research-intro">Numismatic research and identification tools.</p>
 <div class="cc-research-block"><h3>Identify a Coin</h3><p class="small">Use clear pictures of both sides. Possible matches will be presented as suggestions for you to confirm — never as a guaranteed identification.</p><div class="cc-id-grid"><label>Obverse / Face<input id="ccResearchObverse" type="file" accept="image/*" capture="environment"></label><label>Reverse<input id="ccResearchReverse" type="file" accept="image/*" capture="environment"></label></div><div class="actions"><button type="button" class="primary" id="ccResearchIdentify">Find possible matches</button></div><p id="ccResearchIdentifyStatus" class="small" hidden></p><p class="small"><b>Photo rule:</b> photos of your item stay collection photos. Any outside image saved later will be stored separately and labeled <b>Reference Image</b>.</p></div>
 <div class="cc-research-block"><h3>Grading &amp; Certification</h3><div class="cc-research-links">${cards(links.grading)}</div></div>
 <div class="cc-research-block"><h3>Price &amp; Value Research</h3><div class="cc-research-links">${cards(links.values)}</div></div>
 <div class="cc-research-block"><h3>Official &amp; General Coin Research</h3><div class="cc-research-links">${cards(links.official)}</div></div>
 <div class="cc-research-block"><h3>My Research Links</h3><p class="small">A place for your own favorite research sites. Saving custom links will be added without turning this into a general web-search box.</p></div>
 <p class="cc-research-disclaimer">External research links are provided for convenience. The Lewis Private Collection is not affiliated with or endorsed by these services.</p>`;
 const backup=document.getElementById('backupSection');
 main.insertBefore(section,backup||null);
 const style=document.createElement('style');style.textContent=`#ccResearchSection h3{font-size:15px;margin:0 0 8px}.cc-research-intro{margin-top:-4px;color:#6b7280}.cc-research-block{border-top:1px solid #e5e7eb;padding:14px 0}.cc-research-block:first-of-type{border-top:0}.cc-research-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px}.cc-research-link{display:flex;flex-direction:column;gap:3px;padding:10px 12px;border:1px solid #e5e7eb;border-radius:10px;text-decoration:none;color:#111827;font-weight:700;background:#fff}.cc-research-link span{font-size:11px;font-weight:500;color:#6b7280}.cc-id-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.cc-research-disclaimer{font-size:11px;color:#6b7280;margin:12px 0 0}body[data-display-mode="phone"] .cc-id-grid{grid-template-columns:1fr}body[data-display-mode="phone"] .cc-research-links{grid-template-columns:1fr 1fr}@media(max-width:360px){body[data-display-mode="phone"] .cc-research-links{grid-template-columns:1fr}}`;
 document.head.appendChild(style);
 document.getElementById('ccResearchIdentify').onclick=()=>{const o=document.getElementById('ccResearchObverse').files[0],r=document.getElementById('ccResearchReverse').files[0],s=document.getElementById('ccResearchIdentifyStatus');s.hidden=false;s.textContent=(!o||!r)?'Please add both the obverse and reverse before identifying.':'Both sides are ready. The matching engine is the next step; your photos have not been labeled or saved as a reference image.'};
 document.dispatchEvent(new CustomEvent('cc-research-ready'));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();