var timeStart;
var minute;
var sec;

function start() {
  minute = document.getElementById('inputValueMin').value;
  sec = document.getElementById('inputValueSec').value;
  timeStart = setInterval(startup, 1000);

  function startup() {
    document.getElementById('timer').innerHTML = minute + ' : ' + sec;
    sec--;
    if (sec == 00) {
      minute--;
      sec = 59;
      if (minute == 0) {
        minute = 5;
      }
    }
  }
}

function pause() {
  document.getElementById('timer').innerHTML = minute + ' : ' + sec;
  clearInterval(timeStart);
}

function stop() {
  document.getElementById('timer').innerHTML = 0 + ' : ' + 0;
  clearInterval(timeStart);
}
