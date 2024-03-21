'use strict';
let x = 100;
let y = 100;

let elemento = document.getElementById('lienzo');
let lienzo = elemento.getContext('2d');
lienzo.strokeRect(0, 0, elemento.width, elemento.height);
window.addEventListener('keydown', animacion, false);


function animacion(e) {


    if (e.keyCode == 87) {//w
        lienzo.clearRect(0, 0, 400, 500);
        y = y - 10;
        lienzo.fillRect(x, y, 50, 30);
    }
    if (e.keyCode == 83) {//s
        lienzo.clearRect(0, 0, 400, 500);
        y = y + 10;
        lienzo.fillRect(x, y, 50, 30);
    }
    if (e.keyCode == 65) {//A
        lienzo.clearRect(0, 0, 400, 500);
        x = x - 10;
        lienzo.fillRect(x, y, 50, 30);
    }
    if (e.keyCode == 68) {//D
        lienzo.clearRect(0, 0, 400, 500);
        x = x + 10;
        lienzo.fillRect(x, y, 50, 30);
    }
}
