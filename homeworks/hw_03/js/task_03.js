function findBestEmployee(obj) {
  let bestEmployee = '';
  let maxTasks = 0;
  const tasks = Object.entries(obj);
  for (task of tasks) {
    if (task[1] >= maxTasks) {
      maxTasks = task[1];
      bestEmployee = task[0];
    }
  }
  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
