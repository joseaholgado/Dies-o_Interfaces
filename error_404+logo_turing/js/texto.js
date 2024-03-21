'use strict';

// El texto que quieres mostrar
let texto = 'UPS!! Page not found';

// Obtener el elemento donde se mostrará el texto
let elemento = document.getElementById('textoError');

// Esperar 10 segundos antes de iniciar la animación
setTimeout(function() {
  // Mostrar el elemento
  elemento.style.display = 'block';
  elemento.style.color = '#68c8f3';

  // Agregar los caracteres uno por uno
  let i = 0;
  let intervalo = setInterval(function() {
    if (i < texto.length) {
      // Agregar el siguiente caracter
      elemento.innerHTML += texto.charAt(i);
      i++;
    } else {
      // Todos los caracteres han sido agregados, detener el intervalo
      clearInterval(intervalo);
    }
  }, 100); // Agregar un caracter cada 100 milisegundos
}, 10000);