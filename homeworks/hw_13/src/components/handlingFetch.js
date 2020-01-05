import fetchRequest from './apiService';
import refs from './refs';
import clearList from './clearList';
import createDomElement from './createDomElement';

function getInputValue(e) {
  e.preventDefault();
  clearList();
  fetchRequest.page += 0;
  refs.loader.classList.remove('done');
  const inputValue = e.target.elements.input.value;
  fetchRequest.input = true;
  fetchRequest.searchQuary = inputValue;
  fetchRequest.fetchQuery(inputValue).then(data => createDomElement(data.hits));
  refs.loadMore.classList.remove('hidden');
}

function addMoreContent() {
  if (fetchRequest.input) {
    refs.loader.classList.remove('done');
    refs.loadMore.classList.remove('hidden');
    fetchRequest.page += 1;
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
    fetchRequest.fetchQuery().then(data => createDomElement(data.hits));
  }
}

refs.loadMore.addEventListener('click', addMoreContent);
refs.input.addEventListener('submit', getInputValue);
