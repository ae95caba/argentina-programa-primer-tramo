const readlineSync = require("readline-sync");
let rondasGanadasPorJugador = 0;
let rondasGanadasPorComputadora = 0;
let rondas;

const iniciarLaCantidadDeRondas = (function () {
  do {
    rondas = +readlineSync.question("Ingresa la cantidad de rondas a jugar: ");
  } while (isNaN(rondas));
})();

const jugarLasRondasElegidas = (function () {
  function jugarUnaRonda() {
    const opciones = ["piedra", "papel", "tijeras"];

    function obtenerJugadaComputadora() {
      return opciones[Math.floor(Math.random() * 3)];
    }

    let jugadaComputadora = obtenerJugadaComputadora();

    function obtenerJugadaUsuario() {
      let jugada;
      do {
        jugada = readlineSync.question("Ingresa piedra, papel o tijeras: ");
      } while (!opciones.includes(jugada));
      return jugada;
    }

    let jugadaDelJugador = obtenerJugadaUsuario();

    function determinarGanador(jugadaComputadora, jugadaDelJugador) {
      if (jugadaComputadora === jugadaDelJugador) {
        return "Empate";
      }

      const unoDeLosDosUsoTijera =
        jugadaComputadora === "tijeras" || jugadaDelJugador === "tijeras";
      const unoDeLosDosUsoPapel =
        jugadaComputadora === "papel" || jugadaDelJugador === "papel";
      const unoDeLosDosUsoPiedra =
        jugadaComputadora === "piedra" || jugadaDelJugador === "piedra";

      const tijeraVersusPapel = unoDeLosDosUsoTijera && unoDeLosDosUsoPapel;
      const tijeraVersusPiedra = unoDeLosDosUsoTijera && unoDeLosDosUsoPiedra;
      const piedraVersusPapel = unoDeLosDosUsoPiedra && unoDeLosDosUsoPapel;

      if (tijeraVersusPapel) {
        return jugadaDelJugador === "tijeras"
          ? "Gana el jugador"
          : "Gana la computadora";
      }
      if (tijeraVersusPiedra) {
        return jugadaDelJugador === "piedra"
          ? "Gana el jugador"
          : "Gana la computadora";
      }

      if (piedraVersusPapel) {
        return jugadaDelJugador === "papel"
          ? "Gana el jugador"
          : "Gana la computadora";
      }
    }

    let resultado = determinarGanador(jugadaComputadora, jugadaDelJugador);

    const contarRondasGanadas = (function () {
      if (resultado === "Gana la computadora") {
        rondasGanadasPorComputadora++;
      } else if (resultado === "Gana el jugador") {
        rondasGanadasPorJugador++;
      }
    })();

    console.log("La computadora eligio: ", jugadaComputadora);
    console.log("El usuario eligio: ", jugadaDelJugador);
    console.log("El resultado fue: ", resultado);
    console.log("-------------------------------------");
  }
  console.log("--------Empieza el juego-------");
  for (i = 1; i <= rondas; i++) {
    console.log("Ronda: ", i);
    jugarUnaRonda();
  }
})();

const darResultadoFinal = (function () {
  if (rondasGanadasPorComputadora > rondasGanadasPorJugador) {
    console.log("La computadora gano el juego");
  } else if (rondasGanadasPorComputadora < rondasGanadasPorJugador) {
    console.log("El jugador gano el juego");
  } else {
    console.log("El juego termino en empate");
  }
})();
