import refs from './refs';

function createDomElement(data) {
  const elements = data
    .map(e => `<div class="photo-card">
    <img class="photp-card__img" src="${e.largeImageURL}" alt="" />

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
  </div>`)
    .join('');
  refs.output.insertAdjacentHTML('beforeend', elements);
  refs.loader.classList.add('done');
}
export default createDomElement;
