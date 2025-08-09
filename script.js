(function(){
  var KEY='ascii_min_count_v3_1';
  var countEl=document.getElementById('count');
  var btn=document.getElementById('btn');

  function get(){
    try { return parseInt(localStorage.getItem(KEY)||'0',10) || 0; }
    catch (e) { return 0; }
  }
  function set(v){
    try { localStorage.setItem(KEY, String(v)); } catch(e){}
    countEl.textContent = String(v);
  }

  set(get());
  btn.addEventListener('click', function(){ set(get()+1); });
})();