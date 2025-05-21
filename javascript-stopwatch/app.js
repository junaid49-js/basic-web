let hour = document.getElementById('hour');
let seconds = document.getElementById('seconds');
let nanoseconds = document.getElementById('nanoseconds');
let minutes = document.getElementById('minutes');
let startStop = document.getElementById('startStop');
let reset = document.getElementById('reset');

let h = 0, m = 0, s = 0, ns = 0;
let running = false;
let intervalId;

function updateDisplay() {
  hour.innerText = h.toString().padStart(2, '0');
  minutes.innerText = m.toString().padStart(2, '0');
  seconds.innerText = s.toString().padStart(2, '0');
  nanoseconds.innerText = ns.toString().padStart(2, '0');
}

function startTimer() {
  intervalId = setInterval(() => {
    ns++;
    if (ns > 99) {
      ns = 0;
      s++;
    }
    if (s > 59) {
      s = 0;
      m++;
    }
    if (m > 59) {
      m = 0;
      h++;
    }
    updateDisplay();
  }, 10); // update every 10ms (like 1/100 sec)
}

function stopTimer() {
  clearInterval(intervalId);
}

function buttonClick() {
  if (!running) {
    startTimer();
    startStop.innerText = "Stop";
  } else {
    stopTimer();
    startStop.innerText = "Start";
  }
  running = !running;
}

function resetStopWatch(){
  stopTimer();
  hour.innerText = '00';
  minutes.innerText = '00';
  seconds.innerText = '00';
  nanoseconds.innerText = '00';
  startStop.innerText = "Start";
  ns = 0;
  s = 0;
  m = 0;
  h = 0;
}
startStop.addEventListener('click', buttonClick);
reset.addEventListener('click',resetStopWatch)
