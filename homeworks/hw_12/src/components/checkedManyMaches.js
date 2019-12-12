import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
import renderElements from './renderElements';
import clearListItems from './clearListItems';

function checkedManyMaches(obj) {
  if (obj.length > 10) PNotify.error('Введите больше символов!');
  if (obj.length < 10 && obj.length > 2) {
    clearListItems();
    const countryName = obj.map(e => `<li>${e.name}</li>`).join('');
    renderElements(countryName);
  }
  if (obj.length === 1) {
    clearListItems();
    const countryDetails = obj
      .map(
        e => `<li>${e.name}</li>
      <li><img class="js-image" src="${e.flag}" alt=""></li>
      <li>Сapital: ${e.capital}</li>
      <li>TopLevelDomain: ${e.topLevelDomain}</li>
      <li>Рopulation: ${e.population}</li>`,
      )
      .join('');
    renderElements(countryDetails);
  }
}

export default checkedManyMaches;
