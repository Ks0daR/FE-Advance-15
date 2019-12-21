import fetchRequest from './apiService';
import refs from './refs';
import clearList from './clearList';
import createDomElement from './createDomElement';

function getInputValue(e) {
  e.preventDefault();
  fetchRequest.page += 0;
  const inputValue = e.target.elements.input.value;
  fetchRequest.input = true;
  fetchRequest.searchQuary = inputValue;
  fetchRequest.fetchQuery(inputValue).then(data => createDomElement(data.hits));
  refs.loadMore.classList.remove('hidden');
}

function addMoreContent() {
  if (fetchRequest.input) {
    refs.loadMore.classList.remove('hidden');
    fetchRequest.page += 1;
    fetchRequest.fetchQuery().then(data => createDomElement(data.hits));
  }
}

refs.loadMore.addEventListener('click', addMoreContent);
refs.input.addEventListener('submit', getInputValue);
