//   //   const $ = (selector) => document.querySelector(selector);
//   //   const boton = $('button');

//   // Selecionar por etiqueta
//   const boton = document.querySelector('button');

//   // Seleccionar el boton para saludar / con el querySelector lo cojo con el id.
//   const texto = document.querySelector('#texto');

//   // Seleccionar el boton para cerrar / por id
//   const cerrar = document.getElementById('cerrar');

//   // Evento para que aparezca el div cuando se hace click en el boton.
//   // El signo de interrogacion es para cuando hay un null que no me pete. (investigar optional chaining)
//   boton?.addEventListener('click', function () {
//     texto.style.display = 'block';
//   });

//   // Evento para cerrar el div.
//   cerrar.addEventListener('click', function () {
//     texto.style.display = 'none';
//   });

// Selecionar por etiqueta, solo coge el primero que se encuentra
const boton = document.querySelector('button');

// Seleccionar el boton para saludar / por id
const texto = document.getElementById('texto');

// Reutilizar el mismo boton para abrir y cerrar.
/**
 * Realizamos el evento y dentro se comprueba el estado del
 * display del div para hacer una cosa u otra.
 * Ponemos un if para asegurarnos que boton y texto no sea null.
 * */

if (boton && texto) {
  boton.addEventListener('click', function () {
    if (texto.style.display === 'none') {
      texto.style.display = 'block';
    } else {
      texto.style.display = 'none';
    }
  });
}
