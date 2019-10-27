const refs = {
  buttons: document.querySelector('#counter'),
  value: document.querySelector('#value'),
};

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
    refs.value.textContent = counter.counterValue;
  },
  decrement() {
    this.counterValue -= 1;
    refs.value.textContent = counter.counterValue;
  },
};

function mouseClick({ target }) {
  counter[target.dataset.action]();
}
refs.value.textContent = counter.counterValue;
refs.buttons.addEventListener('click', mouseClick);
