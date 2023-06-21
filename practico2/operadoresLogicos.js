const readlineSync = require("readline-sync");
const numero = +readlineSync.question("Ingrese un numero ");
let resultado;

switch (true) {
  case numero > 0 && numero % 2 === 0:
    resultado = "positivo y par";
    break;

  case numero > 0 && numero % 2 !== 0:
    resultado = "positivo y impar";
    break;

  case numero < 0:
    resultado = "negativo";
    break;

  case numero === 0:
    resultado = "cero";
    break;

  default:
}

console.log("El numero es", resultado);
