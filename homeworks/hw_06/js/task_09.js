const { users } = require('./users');

console.log(users.length);

const getNamesSortedByFriendsCount = obj => obj.sort((a, b) => a.friends.length - b.friends.length).map(e => e.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
