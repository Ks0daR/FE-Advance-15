import users from './users.js';

// console.log(users.length);

const getInactiveUsers = obj => obj.filter(e => !e.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
