const { users } = require('./users');

// console.log(users.length);

const getUsersWithAge = (obj, min, max) => obj.filter(e => e.age >= min && e.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
