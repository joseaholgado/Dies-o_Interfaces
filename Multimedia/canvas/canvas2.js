window.onload = function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo=elemento.getContext('2d');
    lienzo.strokeRect(0,0,elemento.clientWidth, elemento.height);

    var img =new Image();
    img.src="./u2.jpg";

    // img.addEventListener("load", function(){ //carga la imagen
    //     // lienzo.drawImage(img, 0, 0, elemento.width, elemento.height);
    //     lienzo.drawImage("load", modificarImagen, elemento.width, elemento.height);

    // });
    img.addEventListener("load", modificarImagen, false);

        function modificarImagen(e){
            img=e.target;
            console.log(img);

            lienzo.drawImage(img,0,0);
            var info=lienzo.getImageData(0,0,200,200)
            var pos;

            for(var x=0;x<=200;x++){
                for(var y=0;y<=200;y++){

                    pos=(info.width*4*y)+(x*4);

                    //-----------SEPIA-----------
                    var red = info.data[pos];
                    var green = info.data[pos+1];
                    var blue = info.data[pos+2];

                    // Convertir a sepia
                    var sepiaRed = (red * 0.393) + (green * 0.769) + (blue * 0.189);
                    var sepiaGreen = (red * 0.349) + (green * 0.686) + (blue * 0.168);
                    var sepiaBlue = (red * 0.272) + (green * 0.534) + (blue * 0.131);

                    // Asignar los nuevos valores a cada canal de color
                    info.data[pos] = sepiaRed; // color rojo
                    info.data[pos+1] = sepiaGreen; // color verde
                    info.data[pos+2] = sepiaBlue; // color azul


                    //-----------ESCALA DE GRISES-----------
                    // var red = info.data[pos];
                    // var green = info.data[pos+1];
                    // var blue = info.data[pos+2];
        
                    // // Calcular la luminancia
                    // var grayscale = 0.299 * red + 0.587 * green + 0.114 * blue;
        
                    // // Asignar el valor de la luminancia a cada canal de color
                    // info.data[pos] = grayscale; // color rojo
                    // info.data[pos+1] = grayscale; // color verde
                    // info.data[pos+2] = grayscale; // color azul
        
                    //-----------BLANCO Y NEGRO-----------
                    // (info.data [pos]<140) ? (info.data[pos]=0,info.data[pos+1]=0,info.data[pos+2]=0) :
                    //                         (info.data[pos]=255,info.data[pos+1]=255,info.data[pos+2]=255); //blanco y negro

                    //-----------NEGATIVO--------
                    // info.data[pos]=255-info.data[pos]; //color azul
                    // info.data[pos+1]=255-info.data[pos+1]; //color verde
                    // info.data[pos+2]=255-info.data[pos+2]; //color rojo
                    // var gris = 0.299 * info.data[pos] + 0.587 * info.data[pos + 1] + 0.114 * info.data[pos + 2];
                    // info.data[pos] = gris;     // color azul
                    // info.data[pos + 1] = gris; // color verde
                    // info.data[pos + 2] = gris; // color rojo
                }
               

            }
            lienzo.putImageData(info,0,0);
    };
    
}