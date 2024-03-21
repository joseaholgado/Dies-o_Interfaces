
window.onload = function () {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    video = document.getElementById('medio');

    video.addEventListener('click', presionar);
}
function presionar() {
    if (!video.paused && !video.ended) {
        video.pause();
        setInterval(bucle);
    } else {
        video.play();
        bucle = setInterval(procesarVideo, 40);
    }

}

function procesarVideo() {

    lienzo.drawImage(video, 0, 0);

    var info = lienzo.getImageData(0, 0, 483, 272);
    var pos;
    for (x = 0; x <= 483; x++) {
        for (y = 0; y <= 272; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            // info.data[pos] = 0;
             info.data[pos + 1] = 0;
             info.data[pos + 2] = 0;
        }
    }
    
    lienzo.putImageData(info,0,0); 
}