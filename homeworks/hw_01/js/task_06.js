let input;
let number;
let total = 0;
do {
  input = prompt('Введите число');
  number = Number(input);
  total += number;
} while (input != null);

console.log(total);
