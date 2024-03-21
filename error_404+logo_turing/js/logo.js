'use strict';

let logo = document.getElementById('logo');

logo.addEventListener('load', function() {
  let svgDoc = logo.contentDocument;
  let paths = svgDoc.querySelectorAll('path');

  paths.forEach(function(path, index) {
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    anime({
      targets: path,
      strokeDashoffset: [pathLength, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: index * 250,
      direction: 'normal',
      loop: true,
      update: function(animation) {
        if (animation.progress === 100) {
          anime.remove(path);
          setTimeout(function() {
            path.style.stroke = 'gray'; // Cambia el color del trazo a rojo
            // Crea una animación de parpadeo
            anime({
              targets: path,
              opacity: [0, 1],
              duration: 200, // Duración de cada parpadeo
              loop: 5, // Número de veces que parpadea
              direction: 'alternate', // Parpadea en ambas direcciones
              complete: function() { // Se ejecuta cuando se completa el parpadeo
                anime({
                  targets: path,
                  opacity: 0, // Hace que el trazo se desvanezca
                  duration: 500, // Duración del desvanecimiento
                  easing: 'linear',
                  complete: function() { // Se ejecuta cuando se completa el desvanecimiento
                    path.style.display = 'none'; // Oculta el trazo
                  }
                });
              }
            });
          }, 1500); // Espera 3 segundos después de que finalice la animación
        }
      }
    });
  });
});
