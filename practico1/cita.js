let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let tamanioDeCita = cita.length;

console.log("El tamanio de la cita es: %d", tamanioDeCita);

let indice = cita.indexOf(substring);
console.log("El indice del substring es: %d", indice);

let citaRevisada = cita.substring(0, indice + substring.length);
console.log(citaRevisada);
