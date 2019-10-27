const refs = {
  input: document.querySelector('input[type="text"]'),
  output: document.querySelector('#name-output'),
};

function changeName(x) {
  const { target } = x;
  refs.output.textContent = target.value;
}

refs.input.addEventListener('input', changeName);
