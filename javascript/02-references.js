const obj1 = {
  name: 'Romain',
};

const obj2 = {
  name: 'Romain',
};

const obj3 = obj1;

console.log(obj1 === obj2); // false (compare les références, est-ce le même objet ?)
console.log(obj1 === obj3); // true