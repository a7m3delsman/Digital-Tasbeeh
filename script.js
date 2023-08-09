
function changeBackgroundColor() {
  var randomColor = getRandomColor();
  document.getElementById("col").style.backgroundColor = randomColor;
  document.getElementById("col2").style.backgroundColor = randomColor; 
  document.getElementById("col1").style.backgroundColor = randomColor;
  document.getElementById("col1").style.backgroundColor = randomColor;
  document.getElementById("col1").style.backgroundColor = randomColor;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}
var audio = new Audio('button-click.mp3');

var muteIcon = document.getElementById("mute-icon");

function toggleMute() {
if (audio.muted) {
  audio.muted = false;
  muteIcon.innerHTML = '<i class="fa fa-volume-up"></i>';
} else {
  audio.muted = true;
  muteIcon.innerHTML = '<i class="fa fa-volume-off"></i>';
}
}
function change(){

var x = document.getElementById("col");

var xx = document.getElementById("col1");

var xxx = document.getElementById("col2");

var y = document.getElementById("cha");



x.style.background = y.value;

xx.style.background = y.value;

xxx.style.background = y.value;

}
var i = 1;
function play(){

  var x = document.getElementById("display");
  count();
 
audio.play();
  x.innerHTML = i;

  i++;

}

     

/*-------------------------------------------------*/

function reset(){
audio.play();
  var x = document.getElementById("display");
  navigator.vibrate(200); 
  x.innerHTML = 0;
  i = 1;
  count2 = -1;
document.getElementById("azkar-text").innerHTML =   "بسم الله الرحمن الرحيم";

alert("اللهم اجعلها في ميزان حسناتي");
}

/*-------------------------------------------------*/


let count2 = -1;
function count() {
count2++;


if (count2 % 33 == 0&& count2 <= 32 ) {
  document.getElementById("azkar-text").innerHTML =  " سبحان الله " + "(33 مرة) ";
} else if (count2 >=33 && count2<=65) {
  document.getElementById("azkar-text").innerHTML =   " الحمد لله "  + "(33 مرة) ";
} else if (count2 >=66 && count2<=98) {
  document.getElementById("azkar-text").innerHTML =   " الله اكبر " + "(33 مرة) ";
} else if (count2 == 99) {
  document.getElementById("azkar-text").innerHTML = "لا إله إلا الله";
  alert ("لا إلهَ إلَّا اللهُ وحدَه لا شريكَ له، له المُلكُ وله الحمدُ،يحي و يميت وهو على كلِّ شيءٍ قدير.")
  count2 =-1;
  return ;
}

}


    
