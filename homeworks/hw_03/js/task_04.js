function countTotalSalary(obj) {
  let acc = 0;
  const values = Object.values(obj);
  for (const value of values) {
    acc += value;
  }
  return acc;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
