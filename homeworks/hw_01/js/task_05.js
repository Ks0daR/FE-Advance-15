const china = 'китай';
const chinaPrice = '100 кредитов';
const southAmerica = 'южная америка';
const southAmericaPrice = '250 кредитов';
const australia = 'австралия';
const australiaPrice = '170 кредитов';
const india = 'индия';
const indiaPrice = '80 кредитов';
const jamayka = 'ямайка';
const jamaykaPrice = '120 кредитов';
const startMessage = 'Введите название страны из которой хотите оформить доставку.';

const input = prompt(startMessage).toLowerCase();
switch (input) {
  case china:
    console.log(`Доставка в ${china} будет стоить ${chinaPrice} кредитов`);
    break;
  case southAmerica:
    console.log(`Доставка в ${southAmerica} будет стоить ${southAmericaPrice} кредитов`);
    break;
  case australia:
    console.log(`Доставка в ${australia} будет стоить ${australiaPrice} кредитов`);
    break;
  case india:
    console.log(`Доставка в ${india} будет стоить ${indiaPrice} кредитов`);
    break;
  case jamayka:
    console.log(`Доставка в ${jamayka} будет стоить ${jamaykaPrice} кредитов`);
    break;
  default:
    console.log('В вашей стране доставка не доступна');
    break;
}
