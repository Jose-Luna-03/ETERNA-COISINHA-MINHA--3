// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cuando la luz de las estrellas se apaga una por una", time: 18.7 },
  { text: "Afuera de mi ventana", time: 23.2 },
  { text: "Escribo una carta al cielo", time: 27.5 },
  { text: "Me dejaste y te fuiste con alguien más", time: 33.5 },
  { text: "Pero, no puedo olvidarte, mi Noemi", time: 38.7 },
  { text: "Así que, recojo mis lágrimas", time: 43 },
  { text: "Y las envío al cielo", time: 47.5 },
  { text: "Incluso si no es tu amor", time: 49 },
  { text: "Cuando me encuentres", time: 55 },
  { text: "ME QUEDARÉ A TU LADO", time: 60 },
  { text: "Y TE AMARÉ, Noemi", time: 66 },
  { text: "Porque no puedo olvidarte...", time: 70 },
  { text: "Paletita, te esperaré", time: 73 },
  { text: "Cuando mi carta llena de lágrimas llegue al cielo", time: 80 },
  { text: "Sé que volverás a mi", time: 87 },
  { text: "Lo voy a creer y recogeré mis lágrimas otra vez", time: 104 },
  { text: "Incluso si no es tu amor", time: 121 },
  { text: "Cuando me encuentres", time: 126 },
  { text: "ME QUEDARÉ A TU LADO, Bonita", time: 130 },
  { text: "Y TE AMARÉ MÁS QUE AYER, Y MENOS QUE MAÑANA", time: 136 },
  { text: "Porque no puedo olvidarte...", time: 141 },
  { text: "CARIÑO, TE ESPERARÉ", time: 145 },
  { text: "Cuando mi carta llena de lágrimas llegue al cielo", time: 149.5 },
  { text: "SÉ QUE VOLVERÁS A MÍ", time: 159 },
  { text: "Cariño, TE ESPERARÉ", time: 174 },
  { text: "Cuando mi carta llena de lágrimas llegue al cielo", time: 182 },
  { text: "Sé que volverás a mí, paletita", time: 189 },
  { text: "Lo voy a creer y recogeré mis lágrimas, otra vez...", time: 203 },
  { text: "Con amor y cariño, su Jose Luis", time: 212 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);