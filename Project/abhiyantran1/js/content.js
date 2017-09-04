var b = document.querySelector('.box'),
    d = document.querySelector('.date');
// clock and date
function clock(){
  var cT = new Date(),
      cD = cT.getDate(),
      cH = cT.getHours(),
      cM = cT.getMinutes(),
      cS = cT.getSeconds(),
      cA = cT.getFullYear();

  cM = (cM < 10 ? '0' : '') + cM;
  cS = (cS < 10 ? '0' : '') + cS;
  cH = (cH > 12) ? cH - 12 : cH;
  cH = (cH === 0) ? 12 : cH;
  // get Clock
  var clk = cH + ':' + cM;
  
  // array  days
  var w = new Array(7);
  w = [
    'Sunday','Monday','Tuesday',
    'Wednesday','Thursday','Friday','Saturday'];
  
  // get day
  var day = w[cT.getDay()];
  
  // array months
  var m = new Array(12);
  m =[
    'January','February','March',
    'April','May','June','July',
    'August','September','October',
    'November','December'];
  // get Month
  var month = m[cT.getMonth()];

  // Render html
  d.innerHTML = 
    '<div class="clock">'+clk+'</div>'+
    '<ul class="day">'+
      '<li>'+day+'</li>'+
      '<li>'+cD+' of '+month+'</li>'+
    '</ul>';
}
// menu 
function menu(e){
  // left = 20px
  if (e.clientX < '20'){
    b.classList.add('show');
    d.classList.add('showClock');
    // show clock
    clock();
  // left = 150px
  }else if(e.clientX > '100'){
    b.classList.remove('show');
    d.classList.remove('showClock');
  }
}
// get function on mouse move
document.onmousemove = menu; 

//toggle
$(".toggle-icon").click(function(e) {
  $('#nav-container').toggleClass("");
  b.classList.add('show');
  d.classList.add('showClock');
  clock();
});
