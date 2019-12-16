import renderListElements from './renderListElements';

function parseHtmlString(data) {
  const htmlString = data.map(
    e => `<li><img src="${e.largeImageURL}" alt="${e.id}" class="rendered-image"></li>`,
  ).join('');
  renderListElements(htmlString);
}

export default parseHtmlString;
