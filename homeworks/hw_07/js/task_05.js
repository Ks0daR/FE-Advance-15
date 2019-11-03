const refs = {
  input: document.querySelector('input[type="text"]'),
  output: document.querySelector('#name-output'),
};
const def = refs.output.textContent;
function changeName(x) {
  const { target } = x;
  console.log(x);
  if (target.value === '') {
    refs.output.textContent = def;
  } else refs.output.textContent = target.value;
}

refs.input.addEventListener('input', changeName);
