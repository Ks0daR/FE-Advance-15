const credits = 23800;
const pricePerDroid = 3000;
const amountDroid = prompt('Введите необходимое количество дроидов');
const priceBuyDroid = amountDroid * pricePerDroid;
if (amountDroid === null) {
  console.log('Отменено пользователем');
} else if (priceBuyDroid > credits) {
  console.log('Недостаточно средств');
} else if (priceBuyDroid > 0 && priceBuyDroid < credits) {
  const creditsBalanse = credits - priceBuyDroid;
  console.log(
    `Вы купили ${amountDroid} дроидов на сумму ${priceBuyDroid}. Остаток на счету ${creditsBalanse}`,
  );
}
