import imagesLoaded from 'imagesloaded';
import masonrySample from './masonry';
import refs from './refs';

function createDomElement(data) {
  const elements = data.map((e) => {
    const div = document.createElement('li');
    const img = document.createElement('img');
    div.classList.add('photo-card', 'grid-item');
    img.classList.add('grid-item__img');
    img.src = e.largeImageURL;
    div.appendChild(img);
    return div;
  });
  refs.output.append(...elements);
  masonrySample.appended([...elements]);
  imagesLoaded('.grid').on('progress', () => {
    masonrySample.layout();
  });
}

export default createDomElement;
