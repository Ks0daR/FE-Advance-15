import refs from './refs';


function renderListElements(content) {
  refs.output.append(...content);
}

export default renderListElements;
