import renderListElements from './renderListElements';

function parseHtmlString(data) {
  const htmlString = data
    .map(
      e => `<li><div class="photo-card">
    <img src="${e.largeImageURL}" alt="" />
  
    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">thumb_up</i>
        ${e.likes}
      </p>
      <p class="stats-item">
        <i class="material-icons">visibility</i>
        ${e.views}
      </p>
      <p class="stats-item">
        <i class="material-icons">comment</i>
        ${e.comments}
      </p>
      <p class="stats-item">
        <i class="material-icons">cloud_download</i>
        ${e.downloads}
      </p>
    </div>
  </div></li>`,
    )
    .join('');
  renderListElements(htmlString);
}

export default parseHtmlString;

// <li><img src="${e.largeImageURL}" alt="${e.id}" class="rendered-image"></li>
