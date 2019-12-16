import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
import renderElements from './renderElements';
import clearListItems from './clearListItems';

function checkedManyMaches(arr) {
  if (arr.length > 10) PNotify.error('Введите больше символов!');
  if (arr.length < 10 && arr.length > 2) {
    clearListItems();
    const countryName = arr.map(e => `<li>${e.name}</li>`).join('');
    renderElements(countryName);
  }
  if (arr.length === 1) {
    clearListItems();
    const countryDetails = arr
      .map(
        e => `<li>${e.name}</li>
      <li><img class="js-image" src="${e.flag}" alt=""></li>
      <li>Сapital: ${e.capital}</li>
      <li>TopLevelDomain: ${e.topLevelDomain}</li>
      <li>Рopulation: ${e.population}</li>`,
      )
      .join('\n');
    renderElements(countryDetails);
  }
}

export default checkedManyMaches;
