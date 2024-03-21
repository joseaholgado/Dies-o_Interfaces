"ues strict"

let x=100;
let y=100;

 function iniciar() {
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.strokeRect(0,0,elemento.width,elemento.height); 

    window.addEventListener('keydown',moverRaton,false);
}
