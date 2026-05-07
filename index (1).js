const map = document.getElementById('map');
const togMap = document.getElementById('togMap');

togMap.addEventListener("click",function(){
  map.style.display=(map.style.display==='none')?'initial':'none';
});