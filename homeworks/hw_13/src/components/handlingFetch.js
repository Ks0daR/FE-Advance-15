import fetchRequest from './apiService';
import refs from './refs';
import parseHtmlString from './prarseHtmlString';
import clearList from './clearList';

function getInputValue(e) {
  e.preventDefault();
  clearList();
  fetchRequest.page += 0;
  const inputValue = e.target.elements.input.value;
  fetchRequest.searchQuary = inputValue;
  fetchRequest.fetchQuery(inputValue).then(data => parseHtmlString(data.hits));
}

function addMoreContent() {
  fetchRequest.page += 1;
  fetchRequest.fetchQuery().then(data => parseHtmlString(data.hits));
}

refs.loadMore.addEventListener('click', addMoreContent);
refs.input.addEventListener('submit', getInputValue);
