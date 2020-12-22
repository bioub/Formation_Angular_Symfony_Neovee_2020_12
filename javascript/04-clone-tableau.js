const arr1 = ["Romain"];

const clone = [...arr1]; // cloné le tableau, (...arr1 = prend les anciennes valeurs)

// changement immuable (au lieu de modifier le tableau existant, on créé un nouveau tableau)
const newArray = [...arr1, 'Amal'];

// changement muable (modifie le tableau existant)
arr1.push('Amal');

// filter, map créént un nouveau tableau donc changement immuable
// arr1.map((v) => v.toUpperCase());