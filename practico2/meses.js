const readlineSync = require("readline-sync");
//transformamos el valor obtenido en un indice para usarlo en el objeto Date
const input = readlineSync.question(
  "ingrese un número entero del 1 al 12 representando los meses de un año "
);

let meses = {
  1: "enero",
  2: "febrero",
  3: "marzo",
  4: "abril",
  5: "mayo",
  6: "junio",
  7: "julio",
  8: "agosto",
  9: "septiembre",
  10: "octubre",
  11: "noviembre",
  12: "diciembre",
};

const mesesCon31Dias = [1, 3, 5, 7, 8, 10, 12];
const mesesCon30Dias = [4, 6, 9, 11];

let diasDelMesElegido;
if (mesesCon31Dias.includes(+input)) {
  diasDelMesElegido = 31;
} else if (mesesCon30Dias.includes(+input)) {
  diasDelMesElegido = 30;
} else if (+input === 2) {
  diasDelMesElegido = 28;
}

console.log(
  `La cantidad de dias del mes de ${meses[+input]} es de ${diasDelMesElegido}`
);
