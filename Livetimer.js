const calendar = document.querySelector("h2.calendar")
const timer = document.querySelector("h2.timer");


function livetimer() {
    const today = new Date();

const timeryears = today.getFullYear();
const timermonth = String(today.getMonth()).padStart(2,"0");
const timerday =  String(today.getDate()).padStart(2,"0");
const timerhours =String(today.getHours()).padStart(2,"0");
const timerminute =String(today.getMinutes()).padStart(2,"0");
const timerseconds =String(today.getSeconds()).padStart(2,"0");

calendar.innerHTML =`${timeryears}년 ${timermonth}월  ${timerday}일` ;
timer.innerHTML= ` ${timerhours}시 ${timerminute}분  ${timerseconds}초 ` ;
};

livetimer();
setInterval(livetimer, 1000);
// liveTimer 





