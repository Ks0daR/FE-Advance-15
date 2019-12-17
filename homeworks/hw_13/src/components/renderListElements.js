import refs from './refs';


function renderListElements(content) {
  refs.output.insertAdjacentHTML('beforeend', content);
}

export default renderListElements;
