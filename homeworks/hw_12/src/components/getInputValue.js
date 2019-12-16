import debounce from 'lodash.debounce';
import refs from './refs';
import checkedManyMaches from './checkedManyMaches';

const baseUrl = 'https://restcountries.eu/rest/v2/name/';

function getInputValue({ target }) {
  const inputValue = target.value;
  if (inputValue.length > 0) {
    fetch(`${baseUrl}${inputValue}`)
      .then(response => response.json())
      .then((data) => {
        checkedManyMaches(data);
      })
      .catch(error => console.error('Error: ', error));
  }
}

const debouncedGetInput = debounce(getInputValue, 500);
refs.inputText.addEventListener('input', debouncedGetInput);
