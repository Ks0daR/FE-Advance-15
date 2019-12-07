const moment = require('moment');

const refs = {
  day: document.querySelector('span[data-value="days"]'),
  hour: document.querySelector('span[data-value="hours"]'),
  minute: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};
const targetTime = moment([2020, 0, 1]);

function newTime() {
  refs.day.textContent = Math.floor((targetTime - moment()) / (1000 * 60 * 60 * 24));
  refs.hour.textContent = Math.floor(((targetTime - moment()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  refs.minute.textContent = Math.floor(((targetTime - moment()) % (1000 * 60 * 60)) / (1000 * 60));
  refs.secs.textContent = Math.floor(((targetTime - moment()) % (1000 * 60)) / 1000);
}

// function newTime() {
//   const currentTime = moment();
//   refs.day.textContent = targetTime.diff(currentTime, 'days');
//   refs.hour.textContent = targetTime.diff(currentTime, 'hours');
//   refs.minute.textContent = targetTime.diff(currentTime, 'minutes');
//   refs.secs.textContent = targetTime.diff(currentTime, 'seconds');
// }

setInterval(newTime, 500);
