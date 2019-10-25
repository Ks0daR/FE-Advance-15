const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ref = document.querySelector('#ingredients');

console.log(ref);

const elements = ingredients.map((title) => {
  const li = document.createElement('li');
  li.textContent = title;
  return li;
});
console.log(elements);

ref.append(...elements);
