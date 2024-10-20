const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

/**
 * Updates the rotation of clock hands every second
 * @param {Function} callback - The function to be executed every second
 * @param {number} interval - The interval in milliseconds between each execution (1000ms in this case)
 * @returns {number} An interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval()
 */
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
