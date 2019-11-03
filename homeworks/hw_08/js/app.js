import galleryItems from './gallery-items.js';

const refs = {
  output: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  closeButton: document.querySelector('.js-button'),
  fullImage: document.querySelector('.js-image'),
};

const listElement = galleryItems.map((e) => {
  const element = `<li class="gallery__item">
            <a
              class="gallery__link"
              href="${e.original}"
            >
              <img
                class="gallery__image"
                src="${e.preview}"
                data-source="${e.original}"
                alt="${e.description}"
              />

              <span class="gallery__icon">
                <i class="material-icons">zoom_out_map</i>
              </span>
            </a>
          </li>`;
  return element;
});

function showModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
  refs.fullImage.src = e.target.dataset.source;
  refs.fullImage.alt = e.target.alt;
  refs.modal.classList.add('is-open');
}

function closeModal() {
  refs.modal.classList.remove('is-open');
  refs.fullImage.src = '';
  refs.fullImage.alt = '';
}

function closeModalByClick({ target }) {
  if (target.className === 'lightbox__content') {
    closeModal();
  }
}

function closeModalByKey({ keyCode }) {
  if (keyCode === 27) {
    closeModal();
  }
}

window.addEventListener('keydown', closeModalByKey);
refs.modal.addEventListener('click', closeModalByClick);
refs.closeButton.addEventListener('click', closeModal);
refs.output.addEventListener('click', showModal);
refs.output.insertAdjacentHTML('afterbegin', [...listElement].join(''));
