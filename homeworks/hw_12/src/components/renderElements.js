import refs from './refs';

function renderElements(elements) {
  refs.output.insertAdjacentHTML('afterbegin', elements);
}

export default renderElements;
