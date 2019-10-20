const { users } = require('./users');

// console.log(users.length);

const getUsersWithFriend = (obj, friendName) => obj.filter(e => e.friends.includes(friendName)).map(e => e.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
