const contadorTexto = document.getElementById('contador');

const incrementar = document.querySelector('#incrementar');
const reiniciar = document.querySelector('#reiniciar');
const disminuir = document.querySelector('#disminuir');
const sonido = document.querySelector('audio');

let contador = 0;

if (contadorTexto !== null) {
  incrementar?.addEventListener('click', function () {
    contador++;
    contadorTexto.textContent = contador.toString();
    colorContador();
    audio();
  });

  reiniciar?.addEventListener('click', function () {
    contador = 0;
    contadorTexto.textContent = contador.toString();
    colorContador();
    audio();
  });

  disminuir?.addEventListener('click', function () {
    contador--;
    contadorTexto.textContent = contador.toString();
    colorContador();
    audio();
  });
}

function colorContador() {
  if (contadorTexto) {
    // Buena practica para asegurarte que el textContent sea una cadena.
    contadorTexto.textContent = contador.toString();
    if (contador % 5 === 0) {
      contadorTexto.style.color = 'green';
    } else {
      contadorTexto.style.color = 'black';
    }
  }
}

function audio() {
  if (contador === 10) {
    sonido?.play();
  }
}
