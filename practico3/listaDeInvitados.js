let personas = [
  "Jose",
  "Maria",
  "Juan",
  "Andres",
  "Lionel",
  "Sofia",
  "Leandro",
  "Emilia",
];

let admitidos = [];
let rechazados = [];

for (let i = 0; i < personas.length; i++) {
  if (personas[i] === "Jose" || personas[i] === "Sofia") {
    rechazados.push(personas[i]);
  } else {
    admitidos.push(personas[i]);
  }
}

for (let i = 0; i < admitidos.length; i++) {
  if (i === 0) {
    console.log("La lista de invitados admitidos es");
    console.log(admitidos[i]);
  } else {
    console.log(admitidos[i]);
  }
}

for (let i = 0; i < rechazados.length; i++) {
  if (i === 0) {
    console.log("La lista de invitados rechazados es");
    console.log(rechazados[i]);
  } else {
    console.log(rechazados[i]);
  }
}

//EXTRA

for (let i = 0; i < admitidos.length; i++) {
  if (i === 0) {
    console.log("La lista ordenada de invitados admitidos es");
    console.log(admitidos.sort()[i]);
  } else {
    console.log(admitidos.sort()[i]);
  }
}

for (let i = 0; i < rechazados.length; i++) {
  if (i === 0) {
    console.log("La lista ordenada de invitados rechazados es");
    console.log(rechazados.sort()[i]);
  } else {
    console.log(rechazados.sort()[i]);
  }
}
