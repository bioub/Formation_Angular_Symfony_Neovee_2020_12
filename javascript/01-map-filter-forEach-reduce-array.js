const prenoms = ['Jean', 'Eric', 'Romain'];

// Algorithme qui affiche en Majuscule les prénoms de 4 lettres

// 2 styles de programmations (paradigme)
// 1/ Impératif (Programmation impérative)
for (const prenom of prenoms) {
  if (prenom.length === 4) {
    const prenomUpper = prenom.toUpperCase();
    console.log(prenomUpper);
  }
}

// 2/ Fonctionnel (Programmation fonctionnelle)
prenoms.filter((prenom) => prenom.length === 4)
       .map((prenom) => prenom.toUpperCase())
       .forEach((prenomUpper) => console.log(prenomUpper));
