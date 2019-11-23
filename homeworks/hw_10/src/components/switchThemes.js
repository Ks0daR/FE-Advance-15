import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = localStorage.getItem('theme') || Theme.LIGHT;

refs.body.classList.add(theme);
if (theme === Theme.DARK) {
  document.getElementById('theme-switch-control').checked = true;
}

function switchThemes({ target }) {
  if (target.checked) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
  if (!target.checked) {
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

export default switchThemes;
