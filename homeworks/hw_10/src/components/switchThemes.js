import refs from './refs';

const theme = localStorage.getItem('theme');

console.log(theme);


function switchThemes(e) {
  if (e.target.checked) {
    console.log(e);
    refs.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'white');
  }
}

export default switchThemes;
