import fetchRequest from './apiService';
import refs from './refs';
import clearList from './clearList';
import createDomElement from './createDomElement';

function getInputValue(e) {
  e.preventDefault();
  // clearList();
  fetchRequest.page += 0;
  const inputValue = e.target.elements.input.value;
  fetchRequest.searchQuary = inputValue;
  fetchRequest.fetchQuery(inputValue).then(data => createDomElement(data.hits));
}

function addMoreContent() {
  fetchRequest.page += 1;
  fetchRequest.fetchQuery().then(data => createDomElement(data.hits));
}

refs.loadMore.addEventListener('click', addMoreContent);
refs.input.addEventListener('submit', getInputValue);
