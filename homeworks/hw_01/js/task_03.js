const ADMIN_PASSWORD = 'jqueryismyjam';
let message = 'Неверный пароль. Доступ запрещен';
const password = prompt('Введите пароль');

if (password === null) {
  message = 'Отменено пользователем';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
}

console.log(message);
