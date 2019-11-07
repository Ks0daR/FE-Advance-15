import galleryItems from './gallery-items.js';

const listElement = galleryItems.map((e) => {
  const element = `<li class="gallery__item">
            <a
              class="gallery__link"
              href="${e.original}"
            >
              <img
                class="gallery__image"
                src="${e.preview}"
                data-lazy="${e.lazyLoad}"
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

const refs = {
  output: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  closeButton: document.querySelector('.js-button'),
  fullImage: document.querySelector('.js-image'),
};

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
function nextModalImage() {
  if (refs.modal.classList.contains('is-open')) {
    let modalImageUrl = galleryItems.map(e => e.original).indexOf(refs.fullImage.src);
    if (modalImageUrl <= galleryItems.length - 1) {
      if (modalImageUrl === galleryItems.length - 1) {
        modalImageUrl = -1;
      }
      refs.fullImage.src = galleryItems[(modalImageUrl += 1)].original;
    }
  }
}
function prevModalImage() {
  if (refs.modal.classList.contains('is-open')) {
    let modalImageUrl = galleryItems.map(e => e.original).indexOf(refs.fullImage.src);
    if (modalImageUrl >= 0) {
      if (modalImageUrl === 0) {
        modalImageUrl = galleryItems.length;
      }
      refs.fullImage.src = galleryItems[(modalImageUrl -= 1)].original;
    }
  }
}
// function modalImage(e) {
//   let index = modalImageUrl.indexOf(refs.fullImage.src);
//   if (e.keyCode === 39 && index < modalImageUrl.length - 1) {
//     refs.fullImage.src = modalImageUrl[(index += 1)];
//   }
//   if (e.keyCode === 37 && index > 0) {
//     refs.fullImage.src = modalImageUrl[(index -= 1)];
//   }
//   console.log(index);
// }
function checkInputKey(e) {
  if (e.keyCode === 27) {
    closeModal();
  }

  if (e.keyCode === 39) {
    nextModalImage(e);
  }

  if (e.keyCode === 37) {
    prevModalImage(e);
  }
}

window.addEventListener('keydown', checkInputKey);
refs.modal.addEventListener('click', closeModalByClick);
refs.closeButton.addEventListener('click', closeModal);
refs.output.addEventListener('click', showModal);
refs.output.insertAdjacentHTML('afterbegin', [...listElement].join(''));

const images = document.querySelectorAll('.gallery__image');

const lazyLoad = (target) => {
  const options = {
    threshold: 0.6,
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imgLink = img.dataset.lazy;

        img.setAttribute('src', imgLink);

        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

images.forEach(image => lazyLoad(image));
