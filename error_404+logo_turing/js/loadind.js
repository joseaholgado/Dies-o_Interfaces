'use strict';
// Esperar 4 segundos antes de iniciar la animación
setTimeout(function() {
  let animation1 = anime({
    targets: '.dot',
    translateY: [
      { value: -20, duration: 500 },
      { value: 0, duration: 500 }
    ],
    easing: 'easeInOutSine',
    delay: anime.stagger(200),
    loop: true,
  });

  let animation2 = anime({
    targets: '#dot1',
    backgroundColor: ['#68c8f3', '#53a6dc'],
    easing: 'linear',
    direction: 'alternate',
    loop: true,
  });

  let animation3 = anime({
    targets: '#dot2',
    backgroundColor: ['#53a6dc', '#68c8f3'],
    easing: 'linear',
    direction: 'alternate',
    loop: true,
  });

  let animation4 = anime({
    targets: '#dot3',
    backgroundColor: ['#68c8f3', '#53a6dc'],
    easing: 'linear',
    direction: 'alternate',
    loop: true,
  });

  // Detener la animación y hacer desaparecer los elementos después de 2 segundos
  setTimeout(function() {
    animation1.pause();
    animation2.pause();
    animation3.pause();
    animation4.pause();

    // Hacer desaparecer los elementos
    document.querySelectorAll('.dot').forEach(function(dot) {
      dot.style.display = 'none';
    });
  }, 4000);
}, 7500);