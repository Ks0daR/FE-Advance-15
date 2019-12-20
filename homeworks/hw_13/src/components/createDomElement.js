import renderListElements from './renderListElements';
import masonrySample from './masonry';
import refs from './refs';

function createDomElement(data) {
  const elements = data.map((e) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('photo-card', 'grid-item');
    img.classList.add('grid-item__img');
    img.src = e.largeImageURL;
    div.appendChild(img);
    refs.output.appendChild(div);
    return div;
  });
    // renderListElements(element);
  masonrySample.appended(elements);
  masonrySample.layout(...elements);
}

export default createDomElement;
