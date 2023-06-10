let a = 8;
let b = 6;
let c = 9;
let d = 5;

let e = a + b;
let f = c - d;

let resultadoFinal = e * f;

let esPar = resultadoFinal % 2 === 0;

console.log(
  "Mis variables iniciales fueron: %d, %d, %d y %d. La respueta a verificar si el resultado final es par es: %s",
  a,
  b,
  c,
  d,
  esPar
);
