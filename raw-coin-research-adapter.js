(()=>{
'use strict';
// Provider-neutral adapter. Intentionally returns no identification until a real approved provider is connected.
window.LewisRawCoinResearch = window.LewisRawCoinResearch || {};
window.LewisRawCoinResearch.version = '1.0';
window.LewisRawCoinResearch.research = async function({photos=[]}={}){
  if(!Array.isArray(photos) || photos.length===0){
    return {ok:false,error:'Add at least one coin photo before researching.'};
  }
  return {
    ok:false,
    pending:true,
    error:'No external research provider is connected yet. No identification was generated or saved.',
    suggestions:[],
    source:null,
    verifiedByUser:false
  };
};
window.LewisRawCoinResearch.acceptSuggestion = function(){
  return {ok:false,error:'Research suggestions require a real result and explicit user review before they can be accepted.'};
};
})();
