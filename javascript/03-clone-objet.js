const obj1 = {
  name: "Romain",
};

const copy = {...obj1}; // ...obj1 => prend les clés/valeurs de obj1 (name: 'Romain')


// changement immuable (au lieu de modifier l'objet existant, on créé un nouvel objet)
const newObjet = {...obj1, email: 'romain.bohdanowicz@formation.tech'};

// changement muable
obj1.email = 'romain.bohdanowicz@formation.tech';