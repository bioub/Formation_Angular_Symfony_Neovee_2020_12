const fs = require("fs");

// 3 styles différentes
// via des fonctions synchrones
// MAUVAISE PRATIQUE
try {
  const content = fs.readFileSync("source.txt", { encoding: "utf-8" }); // cette ligne bloque le thread le temps de la lecture du fichier
  fs.writeFileSync("dest.txt", content);
  console.log("DONE");
} catch (err) {
  console.log(err);
}

// via des fonctions asynchrones basées sur callbacks (fonction de rappel)
// Callback Hell / Pyramid of Doom
fs.readFile("source.txt", { encoding: "utf-8" }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("dest.txt", content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DONE");
      }
    });
  }
});

// via des fonctions asynchrones basées sur des promises (promesse)
// avant 2015 : on utilisait des bibliothèques (bluebird, q)
// à partir de 2015 : natif en JS
fs.promises
  .readFile("source.txt", { encoding: "utf-8" })
  .then((content) => fs.promises.writeFile("dest.txt", content))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err));

// en 2017 : fonctions asynchrone (mot clé async / await, natif en JS)
async function copy() {
  try {
    const content = await fs.promises.readFile("source.txt", { encoding: "utf-8" }); // cette ligne bloque le thread le temps de la lecture du fichier
    await fs.promises.writeFile("dest.txt", content);
    console.log("DONE");
  } catch (err) {
    console.log(err);
  }
}

copy();