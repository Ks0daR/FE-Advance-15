import users from './users.js';

// console.log(users.length);

const getUsersWithGender = (obj, gender) => obj.filter(e => e.gender === gender);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
