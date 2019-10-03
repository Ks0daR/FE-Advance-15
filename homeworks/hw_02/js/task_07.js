const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const MESSAGE_ERROR_LOGIN_LENGTH = 'Ошибка! Логин должен быть от 4 до 16 символов';
const MESSAGE_ERROR_LIGIN_ALREDY_USED = 'Такой логин уже используется!';
const MESSAGE_WELCOME = 'Логин успешно добавлен!';

const isLoginValid = login => login.length >= 4 && login.length <= 16;
const isLoginUnique = function (allLogins, login) {
  if (logins.includes(login)) return isLoginUnique;
};

const addLogin = function (allLogins, login) {
  let message = MESSAGE_WELCOME;
  if (!isLoginValid(login)) {
    message = MESSAGE_ERROR_LOGIN_LENGTH;
    console.log(message);
    return;
  }
  if (isLoginUnique(allLogins, login)) {
    message = MESSAGE_ERROR_LIGIN_ALREDY_USED;
    console.log(message);
    return;
  }
  logins.push(login);
  console.log(message);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
