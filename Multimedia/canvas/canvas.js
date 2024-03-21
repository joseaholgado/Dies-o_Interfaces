// getContext 

window.onload = function iniciar() {
    var elemento = document.getElementById("lienzo");
    let lienzo = elemento.getContext("2d");

    lienzo.strokeRect(0, 0, elemento.width, elemento.height)

    /* lienzo.fillStyle = "#000099";
    lienzo.strokeStyle = "#990000";

    lienzo.strokeRect(100, 100, 120, 120);
    lienzo.fillRect(110, 110, 100, 100);
    lienzo.clearRect(120, 120, 80, 80); */

    /* // DIBUJA UN TRIANGULO
    lienzo.beginPath();
    lienzo.moveTo(100, 100); // toma el puntod de inicio
    lienzo.lineTo(200, 200); // traza una linea hasta el punto indicado
    lienzo.lineTo(100, 200); // traza una linea hasta el punto indicado
    lienzo.closePath(); // cierra el trazo
    lienzo.clip(); // recorta el area de dibujo

    lienzo.beginPath(); // dibuja lineas discontinuas
    for (f = 0; f < 300; f += 10) {
        lienzo.moveTo(0, f);
        lienzo.lineTo(500, f);
    }
    */

    /* // DIBUJA UN CIRCULO
    lienzo.beginPath();
    lienzo.arc(100, 100, 50, 0, Math.PI * 2, false); // dibuja un circulo // FALSE INDICA QUE SE DIBUJA EN SENTIDO CONTRARIO A LAS AGUJAS DEL RELOJ
lienzo.stroke(); // stroke
     */

    /* // DIBUJA UNA CURVA
    lienzo.beginPath(); 
    lienzo.moveTo(50,50); // punto de inicio
    lienzo.quadraticCurveTo(300,200, 50,200); //300,125 es el punto de control y 50,200 es el punto final

    lienzo.moveTo(250,50); // punto de inicio
    lienzo.bezierCurveTo(200,125, 300,125, 250,200); //200,125 es el punto de control1 y 300,125 es el punto de control2 y 250,200 es el punto final
 lienzo.stroke(); // stroke
    */

 /* // TRANSFORMACIONES
    lienzo.save(); // guarda el estado actual del lienzo

    lienzo.font = "bold 20px verdana, sans-serif";
    lienzo.fillText("PRUEBA", 50, 20);
    lienzo.translate(50, 70);
    lienzo.rotate(Math.PI / 180 * 45);
    lienzo.fillText("Prueba rotada y escalada", 0, 0);
    lienzo.rotate(-Math.PI / 180 * 45);
    lienzo.translate(0, 100);
    lienzo.scale(2, 2);
    lienzo.fillText("PRUEBA ESCALADA", 0, 0);

    lienzo.restore(); // restaura el estado del lienzo

    lienzo.strokeRect(0, 0, 50, 50); */



}






