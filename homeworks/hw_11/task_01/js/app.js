const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  paintedElement: document.querySelector('body'),
};

function changeColor() {
  refs.paintedElement.setAttribute(
    'style',
    `background: ${colors[randomIntegerFromInterval(0, colors.length - 1)]}`,
  );
}
let timerID;
function changeColorStarted() {
  refs.btnStart.disabled = true;
  timerID = setInterval(changeColor, 1000);
  return timerID;
}

function changeColorStoped() {
  refs.btnStart.disabled = false;
  clearInterval(timerID);
}

refs.btnStart.addEventListener('click', changeColorStarted);
refs.btnStop.addEventListener('click', changeColorStoped);
