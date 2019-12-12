// import inputValue from './getInputValue';

const baseUrl = 'https://restcountries.eu/rest/v2/name/ukr';


fetch(`${baseUrl}`)
  .then(response => response.json())
  .then(data => console.log(data));
