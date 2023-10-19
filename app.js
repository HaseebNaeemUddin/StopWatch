var hourHeading = document.getElementById("hour");
var MinHeading = document.getElementById("min");
var SecHeading = document.getElementById("sec");
var MsecHeading = document.getElementById("msec");
var startbutton = document.getElementById("start-btn");

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer(){
    msec++;
    MsecHeading.innerHTML = msec;
   if(msec >=100){
    sec++;
    SecHeading.innerHTML = sec;
    msec = 0;
   }
   else if (sec >= 60){
    min++;
    MinHeading.innerHTML = min;
    sec = 0;
   }
   else if(min >= 60){
    hour++;
    hourHeading.innerHTML = hour;
    min = 0;
   }
}

function start () {
   var start = document.getElementById("start-btn")
   interval = setInterval(timer,25);
   startbutton.disabled = true;

}

function pause(){
    clearInterval(interval);
    startbutton.disabled = false;
}

function reset(){
    var hour = 0;
    var min = 0;
    var sec = 0;
    var msec = 0;

    MsecHeading.innerHTML = msec;
    SecHeading.innerHTML = sec;
    MinHeading.innerHTML = min;
    hourHeading.innerHTML = hour;
    pause();
    startbutton.disabled = false;
}


       