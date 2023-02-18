const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  // const hourRotation = 30 * currentHour + currentMinute / 2;
  // const minuteRotation = 6 * currentMinute;
  // const secondRotation = 6 * currentSecond;
  hour.style.transform = `rotate(${
    30 * currentHour + currentMinute / 2 + currentSecond / 120
  }deg)`;
  // hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${
    6 * currentMinute + currentSecond / 120
  }deg)`;
  // minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${6 * currentSecond}deg)`;
  // second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
