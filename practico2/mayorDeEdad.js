const readlineSync = require("readline-sync");
const edad = readlineSync.question("Cual es tu edad? ");
const esMayor = edad >= 18;

console.log("Eres", esMayor ? "mayor" : "menor", "de edad");
