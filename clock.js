const hour = document.getElementsByClassName('clock__hour');
const minute = document.getElementsByClassName('clock__minute');
const second = document.getElementsByClassName('clock__second');

const setDate = () => {
    const now = new Date();
    
    second[0].style.transform = "rotate(" + ((now.getSeconds() / 60) * 360) + "deg)";
    minute[0].style.transform = "rotate(" + ((now.getMinutes() / 60) * 360) + "deg)";
    hour[0].style.transform = "rotate(" + ((now.getHours() / 12) * 360) + "deg)";

}

setInterval(setDate, 1000);