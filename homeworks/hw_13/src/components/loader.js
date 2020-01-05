import refs from './refs';

window.onload = function () {
  setTimeout(() => {
    if (!refs.loader.classList.contains('done')) {
      refs.loader.classList.add('done');
    }
  }, 2000);
};
