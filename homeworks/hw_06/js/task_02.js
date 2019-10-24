import users from './users.js';

// console.log(users.length);

const getUsersWithEyeColor = (obj, color) => obj.filter(e => e.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
