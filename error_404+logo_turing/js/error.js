"use strict";

// Esperar 10 segundos antes de mostrar el SVG 404
setTimeout(function() {
    // Mostrar el SVG 404
    var errorElement = document.getElementById('error');
    errorElement.style.display = 'block';
  
    // Obtener todos los elementos con id 'text2'
    var elements = document.querySelectorAll('#text2');

    // Iterar sobre cada elemento
    elements.forEach(function(element) {
        // Aplicar la animación a cada elemento
       anime({
            targets: element,
            scale: [
                { value: 1.1, duration: 1000 }, // Agrandar
                { value: 1, duration: 1000 } // Achicar
            ],
            easing: 'easeInOutSine',
            loop: true,
        });

        // Agregar un evento de clic al elemento
        element.addEventListener('click', function() {
            // Iniciar la animación de rotación
            anime({
                targets: element,
                rotate: '1turn', // Hacer que el elemento gire una vuelta completa
                duration: 2000, // Duración de la animación en milisegundos
                easing: 'easeInOutSine', // Tipo de transición
            });
        });
    });
}, 12500);

