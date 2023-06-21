const readlineSync = require("readline-sync");

let input = readlineSync.question(
  "ingresar un número del 1 al 7 representando un día de la semana "
);

let dia;

switch (+input) {
  case 1:
    dia = "lunes";
    break;
  case 2:
    dia = "martes";
    break;
  case 3:
    dia = "miércoles";
    break;
  case 4:
    dia = "jueves";
    break;
  case 5:
    dia = "viernes";
    break;
  case 6:
    dia = "sábado";
    break;
  case 7:
    dia = "domingo";
    break;
  default:
    dia = "Numero inválido";
}

console.log(`Hoy es ${dia}`);
