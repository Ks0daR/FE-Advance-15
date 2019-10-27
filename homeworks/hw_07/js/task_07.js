const refs = {
  range: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
function changeFontSize({ target }) {
  refs.text.style.cssText = `font-size: ${target.value / 2}px`;
}

refs.range.addEventListener('click', changeFontSize);
