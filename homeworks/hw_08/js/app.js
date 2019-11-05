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

const modalImageUrl = galleryItems.map(e => e.original);

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

function ModalImage(e, index) {
  console.log(e.keyCode);
  if (e.keyCode === 39) {
    refs.fullImage.src = modalImageUrl[(index += 1)];
  }
  if (e.keyCode === 37) {
    refs.fullImage.src = modalImageUrl[(index -= 1)];
  }
}
function checkInputKey(e) {
  const index = modalImageUrl.indexOf(e.target.href);
  if (e.keyCode === 27) {
    closeModal();
  }

  if (e.keyCode === 39 || e.keyCode === 37) {
    ModalImage(e, index);
  }
}

window.addEventListener('keydown', checkInputKey);
refs.modal.addEventListener('click', closeModalByClick);
refs.closeButton.addEventListener('click', closeModal);
refs.output.addEventListener('click', showModal);
refs.output.insertAdjacentHTML('afterbegin', [...listElement].join(''));
