import debounce from 'lodash.debounce';
import refs from './refs';

let inputValue = 0;

function getInputValue({ target }) {
  inputValue = target.value;
  console.log(inputValue);
  return inputValue;
}

const debouncedGetInput = debounce(getInputValue, 500);
refs.inputText.addEventListener('input', debouncedGetInput);
console.log(inputValue);
