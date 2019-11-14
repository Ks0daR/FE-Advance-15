import templeteMenu from '../templates/menuItem.hbs';

function makeUpCard(data, root) {
  const html = data.map(e => templeteMenu(e)).join('');
  root.insertAdjacentHTML('afterbegin', html);
}

export default makeUpCard;
