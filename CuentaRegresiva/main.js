const cuenta = document.querySelector('#contador');

let contadoor = 10;

if (cuenta) {
  const interval = setInterval(() => {
    cuenta.textContent = contadoor.toString();
    contadoor--;

    if (contadoor < 0) {
      clearInterval(interval); // Detener el temporizador cuando llegue a 0
      cuenta.textContent = '¡Tiempo agotado!';
    }
  }, 1000);
}
