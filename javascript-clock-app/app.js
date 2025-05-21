let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
function showCurrentSeconds() {
    setInterval(() => {
    let sec = new Date().getSeconds().toString().padStart(2, '0');;
    let min = new Date().getMinutes().toString().padStart(2, '0');;
    let hr = new Date().getHours().toString().padStart(2, '0');;
    seconds.innerText = sec;
    minutes.innerText = min;
    hour.innerText = hr;
    }, 1000);
}

showCurrentSeconds()
