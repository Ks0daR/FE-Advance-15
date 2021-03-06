// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция. При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  render: document.querySelector('.button-render'),
  destroy: document.querySelector('.button-destroy'),
  res: document.querySelector('#boxes'),
  counter: document.querySelector('input[type="number"]'),
};

function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColor() {
  return `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
}

function createBoxes(amount) {
  const element = Array(amount)
    .fill('')
    .map((e, i) => {
      const div = document.createElement('div');
      div.style.height = `${30 + i * 10}px`;
      div.style.width = `${30 + i * 10}px`;
      div.style.background = generateRandomColor();
      return div;
    });
  console.log(element);
  return element;
}
function setBoxes() {
  const num = +refs.counter.value;
  refs.res.append(...createBoxes(num));
}
function destroyBoxes() {
  refs.res.innerHTML = '';
  refs.counter.value = 0;
}
refs.render.addEventListener('click', setBoxes);
refs.destroy.addEventListener('click', destroyBoxes);
