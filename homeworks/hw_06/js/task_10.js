import users from './users.js';

// console.log(users.length);

const getSortedUniqueSkills = obj => obj.reduce((acc, sum) => {
  acc.push(...sum.skills);
  return acc;
}, []).sort((a, b) => a.localeCompare(b, 'uk')).filter((elem, i, arr) => arr.indexOf(elem) === i);


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
