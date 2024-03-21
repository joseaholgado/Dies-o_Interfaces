"use strict"

var elemento = document.getElementById("lienzo");
let lienzo = elemento.getContext('2d');


lienzo.strokeRect(0, 0, elemento.width, elemento.height);


var imagenContenedor = document.getElementById('imagenContenedor');

    var imagen = new Image();

    // Reemplaza "tu_imagen.jpg" con la ruta correcta de tu imagen
    imagen.src = './coche horizontal 800.jpg';

    var x = 0;
    var y = 0;
    var escala = 0.0; // Factor de escala inicial
    var factorZoom = 0.1; // Ajusta según sea necesario

    imagen.onload = function () {
        imagenContenedor.addEventListener('mousemove', function (evento) {
            // Obtener coordenadas x e y del mouse relativas al contenedor de la imagen
            x = evento.clientX - imagenContenedor.getBoundingClientRect().left;
            y = evento.clientY - imagenContenedor.getBoundingClientRect().top;

            // Calcular nueva escala basada en la posición del mouse
            escala = 0.7 + factorZoom;

            // Limpiar el lienzo antes de dibujar la imagen escalada
            lienzo.clearRect(0, 0, lienzo.canvas.width, lienzo.canvas.height);

            // Dibujar la imagen escalada en el lienzo
            lienzo.drawImage(imagen, 0, 0, imagen.width, imagen.height, -x , -y , imagen.width * escala, imagen.height * escala);
        });

        // Restaurar la escala cuando el mouse no esté sobre la imagen
        imagenContenedor.addEventListener('mouseout', function () {
            escala = 1;
            lienzo.clearRect(0, 0, lienzo.canvas.width, lienzo.canvas.height);
            lienzo.drawImage(imagen, 0, 0, imagen.width, imagen.height, 0, 0, imagen.width, imagen.height);
        });
    };
