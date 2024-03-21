let song = document.getElementById('song');

let playBtn = document.getElementById('play');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');
let rewindBtn = document.getElementById('rewind');
let forwardBtn = document.getElementById('forward');
let muteBtm = document.getElementById('mute');
let unmuteBtn = document.getElementById('unmute');

let playButton = document.getElementById('playButton');
let videoPlayer = document.getElementById('videoPlayer');

let progressBar = document.getElementById('progress-bar');

function init() {

  playBtn.addEventListener('click', function () {
    playSong();
  });

  stopBtn.addEventListener('click', function () {
    song.pause();
    song.currentTime = 0;
    playBtn.display = 'block';
    pauseBtn.display = 'none';
  });

  rewindBtn.addEventListener('click', function () {
    song.currentTime -= 10;
  });

  forwardBtn.addEventListener('click', function () {
    song.currentTime += 10;
  });

  muteBtm.addEventListener('click', function () {
    song.muted = true;
    muteBtm.display = 'none';
    unmuteBtn.display = 'block';
  });

  unmuteBtn.addEventListener('click', function () {
    song.muted = false;
    muteBtm.display = 'block';
    unmuteBtn.display = 'none';
  });

    
}

function playSong() {

  play.innerHTML= '<i class="bi bi-pause"></i>';

  if (!song.paused && !song.ended) {
    song.pause();
    play.innerHTML= '<i class="bi bi-play"></i>'
    window.clearInterval(bucle);
  } else {
    song.play();
    bucle = setInterval(barState, 1000);
  }

  function barState() {
    if (!song.ended) {
      let total = parseInt(song.currentTime * 100 / song.duration);
      progressBar.style.width = `${total}%`;
    }
  }
}

window.addEventListener('load', init, false);


document.addEventListener('DOMContentLoaded', function () {
  
videoPlayer.pause();
  playButton.addEventListener('click', function () {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });
});