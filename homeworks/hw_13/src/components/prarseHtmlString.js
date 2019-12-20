import renderListElements from './renderListElements';

function parseHtmlString(data) {
  const htmlString = data
    .map(
      e => `<div class="photo-card grid-item">
            <img class="grid-item__img" src="${e.largeImageURL}" alt="" />
            </div>`,
    )
    .join('');
  renderListElements(htmlString);
}

export default parseHtmlString;

// <li><img src="${e.largeImageURL}" alt="${e.id}" class="rendered-image"></li>


/* <div class="stats">
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
    </div> */
