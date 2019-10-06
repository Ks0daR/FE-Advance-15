const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = 'false';

const userUpdate = {
  mood: 'happy',
  hobby: 'javascript',
  premium: 'false',
};

const userSettings = Object.assign({}, user, userUpdate);

console.log(userSettings);

function getUserInfo(array) {
  let info = '';
  const keys = Object.keys(userSettings);
  for (key of keys) {
    info += `${key}: ${array[key]} \n`;
  }
  return info;
}

console.log(getUserInfo(userSettings));
