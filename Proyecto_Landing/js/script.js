'use strict'



//-----------------------------Carrusel de Imagenes Canvas--------------------------------
const canvasElements = ['canvas1', 'canvas2', 'canvas3', 'canvas4'].map((id, index) => ({
  canvas: document.getElementById(id),
  ctx: null,
  images: ['../imagenes/imagen1.jpg', '../imagenes/imagen2.jpg', '../imagenes/imagen3.jpg',
    '../imagenes/imagen4.jpg', '../imagenes/imagen5.jpg', '../imagenes/imagen6.jpg'],
  currentIndex: index % 3 // Asegura que el índice inicial esté dentro del rango de las imágenes disponibles
}));

canvasElements.forEach(element => {
  element.ctx = element.canvas.getContext('2d');
  drawImageWithFilter(element);
});

function drawImageWithFilter(element) {
  const img = new Image();
  img.src = element.images[element.currentIndex];
  img.onload = function() {
    element.ctx.clearRect(0, 0, element.canvas.width, element.canvas.height);
    element.ctx.drawImage(img, 0, 0, element.canvas.width, element.canvas.height);
    applyFilter(element);
    setTimeout(() => {
      element.currentIndex = (element.currentIndex + 1) % element.images.length;
      drawImageWithFilter(element);
    }, 5000); // Cambiar de imagen cada 5 segundos
  };
}

function applyFilter(element) {
  // Aplica un filtro diferente en cada iteración, por ejemplo:
  const filters = ['grayscale(100%)', 'sepia(100%)', 'invert(100%)'];
  const randomFilter = filters[Math.floor(Math.random() * filters.length)];
  element.ctx.filter = randomFilter;
  element.ctx.drawImage(element.canvas, 0, 0, element.canvas.width, element.canvas.height);
  element.ctx.filter = 'none';
}

  //-----------------------------Logo Animado--------------------------------
   // Select all paths in the SVG
   let paths = document.querySelectorAll('svg path');

   // For each path...
   for (let i = 0; i < paths.length; i++) {
       let path = paths[i];
 
       // Get the length of the path
       let length = path.getTotalLength();
 
       // Set a CSS letiable for the length
       path.style.setProperty('--path-stroke', length);
 
       // Reset the length of the path to 0
       path.style.strokeDasharray = length;
       path.style.strokeDashoffset = length;
   }
 
   // Create the animation
   anime({
       targets: 'path',
       strokeDashoffset: [anime.setDashoffset, 0],
       easing: 'easeInOutSine',
       duration: 5500,
       delay: function(el, i) { return i * 100 },
       direction: 'alternate',
       loop: true
   });
   anime({
       targets: 'svg ',
       translateY: 20,
       duration: 2000,
       easing: 'easeInOutQuad',
       direction: 'alternate',
       loop: true
   });


   //-----------------------------Reproductor de Audio--------------------------------
   const getElement = id => document.getElementById(id);

   const song = getElement('song');
   const playBtn = getElement('play');
   const pauseBtn = getElement('pause');
   const stopBtn = getElement('stop');
   const rewindBtn = getElement('rewind');
   const forwardBtn = getElement('forward');
   const muteBtn = getElement('mute');
   const unmuteBtn = getElement('unmute');
   const playButton = getElement('playButton');
   const videoPlayer = getElement('videoPlayer');
   const progressBar = getElement('progress-bar');
   const songSelector = document.getElementById('song-selector');
   const songImage = document.getElementById('song-image');
   const songTitle = document.getElementById('song-title');
   const songDescription = document.getElementById('song-description');
   const songToImageMap = {
    './imagenes/Trueno.mp3': './imagenes/Trueno.png',
    './imagenes/Insomnia.mp3': './imagenes/Insomnia.png',
    './imagenes/Marnik&Naeleck.mp3': './imagenes/BoyzInParis.png',
  };
  const songToTitleMap = {
    './imagenes/Marnik&Naeleck.mp3': 'Boyz In Paris',
    './imagenes/Insomnia.mp3': 'Insomnia',
    './imagenes/Trueno.mp3': 'No Clap',
  };
  
  const songToDescriptionMap = {
    './imagenes/Marnik&Naeleck.mp3': 'Marnik & Naeleck',
    './imagenes/Insomnia.mp3': 'Maxi Jazz',
    './imagenes/Trueno.mp3': 'Trueno',
  };
   
   let bucle;

      // Escuchar el evento change en el selector de canciones
    songSelector.addEventListener('change', function() {
      // Cambiar la canción que se está reproduciendo
      song.src = songSelector.value;
      // Cambiar la imagen
      songImage.src = songToImageMap[songSelector.value];
       // Cambiar el título
      songTitle.textContent = songToTitleMap[songSelector.value];

      // Cambiar la descripción
      songDescription.textContent = songToDescriptionMap[songSelector.value];
      // Reiniciar la canción
      song.currentTime = 0;
      pauseBtn.style.display = 'none';
       playBtn.innerHTML = '<i class="bi bi-play"></i>';
     
    });
   
   const playSong = () => {
     playBtn.innerHTML = '<i class="bi bi-pause"></i>';
   
     if (!song.paused && !song.ended) {
       song.pause();
       playBtn.innerHTML = '<i class="bi bi-play"></i>';
       window.clearInterval(bucle);
     } else {
       song.play();
       bucle = setInterval(barState, 1000);
     }
   };
   
   const barState = () => {
     if (!song.ended) {
       const total = parseInt(song.currentTime * 100 / song.duration);
       progressBar.style.width = `${total}%`;
     }
   };
   
   const init = () => {
     playBtn.addEventListener('click', playSong);
   
     stopBtn.addEventListener('click', () => {
       song.pause();
       song.currentTime = 0;
       pauseBtn.style.display = 'none';
       playBtn.innerHTML = '<i class="bi bi-play"></i>';
     });
   
     rewindBtn.addEventListener('click', () => {
       song.currentTime -= 10;
     });
   
     forwardBtn.addEventListener('click', () => {
       song.currentTime += 10;
     });
   
   
     videoPlayer.pause();
     playButton.addEventListener('click', () => {
       if (videoPlayer.paused) {
         videoPlayer.play();
       } else {
         videoPlayer.pause();
       }
     });
   };

   const muteUnmute = () => {
    if (song.muted) {
      song.muted = false;
      muteBtn.innerHTML = '<i class="bi bi-volume-up"></i>';
    } else {
      song.muted = true;
      muteBtn.innerHTML = '<i class="bi bi-volume-mute"></i>';
    }
  };
  muteBtn.addEventListener('click', muteUnmute);

   window.addEventListener('load', init, false);
