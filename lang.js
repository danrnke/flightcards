(function(){
  var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
  var lang=saved||((navigator.language||'en').toLowerCase().indexOf('de')===0?'de':'en');
  function set(l){document.documentElement.lang=l;try{localStorage.setItem('lang',l)}catch(e){}
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l)});
    var t=document.querySelector('meta[name="title-'+l+'"]');if(t)document.title=t.content;}
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){set(b.dataset.set)}});set(lang)});
  document.documentElement.lang=lang;
})();
