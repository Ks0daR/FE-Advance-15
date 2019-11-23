import galleryItems from '../db/gallery-items';

const createListElement = galleryItems.map((e) => {
  const element = `
    <a href="${e.original}" title="${e.description}" class="list__link">
      <img src="${e.lazyLoad}" alt="${e.description}" class="list__element"/>
    </a>
   `;
  return element;
});

export default createListElement;
