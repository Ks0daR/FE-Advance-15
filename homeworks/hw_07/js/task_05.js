const refs = {
  input: document.querySelector('input[type="text"]'),
  output: document.querySelector('#name-output'),
};
const def = refs.output.textContent;
function changeName(x) {
  const { target } = x;
  if (target.textLength !== 0) {
    refs.output.textContent = target.value;
  } else refs.output.textContent = def;
}

refs.input.addEventListener('input', changeName);
