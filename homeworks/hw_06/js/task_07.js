const { users } = require('./users');

// console.log(users.length);

const calculateTotalBalance = obj => obj.reduce((acc, sum) => acc + sum.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
