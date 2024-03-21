window.onload = function init() {
    var elemento=document.getElementById('lienzo');
    lienzo =elemento.getContext('2d');  








    //-----------OJOS GIRATORIO--------------
    window.addEventListener('mousemove', animacion, false); }  

        function animacion(e){ 
        lienzo.clearRect(0,0,300,500); 
        var xraton=e.clientX; 
        var yraton=e.clientY; 
        var xcentro=220; 
        var ycentro=150; 
        var angulo=Math.atan2(xraton-xcentro,yraton-ycentro); 
        var x=xcentro+Math.round(Math.sin(angulo)*10); 
        var y=ycentro+Math.round(Math.cos(angulo)*10); 
        lienzo.beginPath(); 
        lienzo.arc(xcentro,ycentro,20,0,Math.PI*2, false); 
        lienzo.moveTo(xcentro+70,150); 
        lienzo.arc(xcentro+50,150,20,0,Math.PI*2, false); 
        lienzo.stroke(); 
        lienzo.beginPath();
        lienzo.moveTo(x+10,y); 
        lienzo.arc(x,y,10,0,Math.PI*2, false); 
        lienzo.moveTo(x+60,y); 
        lienzo.arc(x+50,y,10,0,Math.PI*2, false); 
        lienzo.fill(); 


    //-----------CUADRADO GIRATORIO--------------
    //     lienzo.strokeStyle = "#a16";
    //     lienzo.fillStyle = "rgba(255,255,255,.1)";
    //     lienzo.translate(250,250);
    //     setInterval(rotar, 50);


    // }
    // function rotar(){
    //     lienzo.clearRect(-200,-100,500,300);
    //     lienzo.strokeRect(-50,-50,100,100);
    //     lienzo.rotate((Math.PI/180)*5);
    //     lienzo.fillRect(0,0,200,200);
    }