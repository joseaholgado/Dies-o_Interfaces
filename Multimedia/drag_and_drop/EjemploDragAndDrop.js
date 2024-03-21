


window.onload = function iniciar() {


  var canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");

  canvas.addEventListener("dragenter", dragenter, false);
  canvas.addEventListener("dragover", dragover, false);
  canvas.addEventListener("drop", drop, false);

}


function dragenter(e) {
  //detiene la propagación de ese evento a través de los elementos DOM 
  e.stopPropagation();
  // Se utiliza  para detener la acción predeterminada asociada a ese evento, en este caso que se habra la imágen arrastrada en otra página.
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  var datos = e.dataTransfer;
  var archivos = datos.files;
  // ahora podemos manejar los archivos:
  manejarArchivos(archivos);
}
function manejarArchivos(archivos) {
  for (var i = 0; i < archivos.length; i++) {
    var archivo = archivos[i];
    console.log(archivo);
    var esImagen = /^image\//;

    if (!esImagen.test(archivo.type)) {
      continue;
    }

    var img = new Image();
    img.src = window.URL.createObjectURL(archivo);
    img.onload = function () {

      ctx.drawImage(this, 0, 0);

      window.URL.revokeObjectURL(this.src);
    }
  }
}


