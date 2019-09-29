const total = 100;
const ordered = prompt('Введите необходимое количество товара');
let message = 'На складе недостаточно твоаров!';
if (ordered <= total) {
  message = 'Менеджер свяжется с вами';
}
console.log(message);
