let input;
let number;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число!');
  number = Number(input);
  numbers.push(number);
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Сумма введенных чисел равна ${total}`);
