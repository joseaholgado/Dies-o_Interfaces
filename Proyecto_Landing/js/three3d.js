'use strict'
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/controls/OrbitControls.js';

//-----------------------------Animacion en 3D--------------------------------//

let loader = new GLTFLoader();

// Obtener el elemento canvas
let canvas = document.getElementById('three3d');

// Crear una escena
let scene = new THREE.Scene();

// Crear una cámara
let camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 330;
camera.position.y = 200;

// Crear un renderizador
let renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

// Cambiar el color de fondo a blanco
renderer.setClearColor("#99793D"); // 0xffffff es blanco en hexadecimal

// Crear una luz ambiental
let light = new THREE.AmbientLight(0xffffff); // 0xffffff es blanco en hexadecimal

// Añadir la luz a la escena
scene.add(light);

// Crear una luz direccional
let directionalLight = new THREE.DirectionalLight(0xffffff, 1);

// Mover la luz a una posición que ilumine todo tu modelo
directionalLight.position.set(0, 10, 10);

// Hacer que la luz apunte al centro de tu modelo
directionalLight.lookAt(0, 0, 0);

// Añadir la luz direccional a la escena
scene.add(directionalLight);

// Variable para almacenar el modelo cargado
let model;

// Cargar un modelo GLTF
loader.load(
  '../public/scene.gltf',
  function (gltf) {
    // Añadir el modelo a la escena
    scene.add(gltf.scene);
    // Almacenar el modelo en la variable
    model = gltf.scene;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);



// Crear controles de órbita
let controls = new OrbitControls(camera, renderer.domElement);

// Variable para controlar si la animación está en pausa
let isPaused = false;

// Escuchar el evento mousedown
canvas.addEventListener('mousedown', function() {
  // Pausar la animación
  isPaused = true;
});

// Escuchar el evento mouseup
canvas.addEventListener('mouseup', function() {
  // Reanudar la animación
  isPaused = false;
});

// Variable para controlar si se debe mover el modelo
let shouldMove = false;

// Escuchar el evento click
canvas.addEventListener('click', function() {
  // Comprobar si el modelo está cargado
  if (model) {
    // Cambiar el estado de shouldMove
    model.rotation.y += 10;
  }
});

// Crear una función de animación
function animate() {
  requestAnimationFrame(animate);

  // Rotar el modelo si está cargado y la animación no está en pausa
  if (model && !isPaused) {
    model.rotation.x += 0.00;
    model.rotation.y += 0.002;

    // Mover el modelo hacia arriba o hacia abajo si shouldMove es true
    if (shouldMove) {
      if (isMovingUp) {
        model.position.y += 0.1;
      } else {
        model.position.y -= 0.1;
      }
    }
  }

  // Actualizar los controles de órbita
  controls.update();

  // Renderizar la escena
  renderer.render(scene, camera);
}

// Llamar a la función de animación
animate();