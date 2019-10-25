const categories = document.querySelector('#categories');

console.log(`В списке ${categories.children.length} категории`);

const arr = Array.from(categories.children);

const names = arr.map(
  e => `Категория: ${e.firstElementChild.textContent}. Количество элементов: ${e.lastElementChild.children.length} \n`,
);

console.log(names);
