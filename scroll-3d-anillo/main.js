import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import anime from 'animejs/lib/anime.es.js';


// Crear escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 1);
camera.position.z = 4;
camera.position.y = 3;
camera.position.x = 0;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Añadir luces
const ambientLight = new THREE.AmbientLight(0x404040,100); // luz suave blanca
scene.add(ambientLight);
const pointLight2= new THREE.PointLight(0xffffff, 3220, 1151); // luz blanca, intensidad, distancia
const pointLight = new THREE.PointLight(0xffffff, 5910, 1111); // luz blanca, intensidad, distancia
pointLight.position.set(0, 10, 10); // posición de la luz
pointLight2.position.set(0, 10, 0); // posición de la luz
scene.add(pointLight, pointLight2);



// const gridHelper = new THREE.GridHelper( 100, 100 );
// scene.add( gridHelper );


const loader = new GLTFLoader();

loader.load(
    './public/scene.gltf', // Asegúrate de que esta ruta es correcta
    function (gltf) {
        gltf.scene.position.set(0, 0, 0);
        scene.add(gltf.scene);

        animate();
    },
    undefined, // Este argumento es para una función de progreso que se llama mientras se carga el modelo
    function (error) {
        console.error(error);
    }
);

// Añadir controles de órbita
const controls = new OrbitControls(camera, renderer.domElement);


// Definir las posiciones de la cámara
const cameraPositions = [
    { x: 0, y: 3, z: 4 },
    { x: 2, y: 1, z: 0 },
    { x: 0, y: 2, z: 0},
    { x: -1.5, y: 1, z: -1.5 },
    { x: 0, y: 0, z: -1 }
];

// Obtener los divs
const divs = [
    document.getElementById('info1'),
    document.getElementById('info2'),
    document.getElementById('info3'),
    document.getElementById('info4'),
    document.getElementById('info5')
];

// Inicializar el contador de la posición actual
let currentPosition = 0;

// Añadir un evento de escucha para el evento de scroll del mouse
window.addEventListener('wheel', function(event) {
    // Ocultar los divs con texto
    divs.forEach((div, index) => {
        // Si la cámara está en la primera o última posición y este es el primer o último div, no lo ocultes
        if (!((currentPosition === 0 && index === 0) || (currentPosition === cameraPositions.length - 1 && index === divs.length - 1))) {
            console.log(div);
            console.log(currentPosition);
            anime({
                targets: div,
                opacity: 0,
                duration: 2000,
                easing: 'easeInOutCubic'
            });
        }
    });

    // Cambiar la posición de la cámara y mostrar los divs con texto en función del evento de scroll
    if (event.deltaY < 0 && currentPosition > 0) {
        // Scroll hacia arriba
        currentPosition--;

        anime({
            targets: camera.position,
            ...cameraPositions[currentPosition],
            duration: 4000,
            easing: 'easeInOutCubic',
            update: function (anim) {
                camera.lookAt(0, 0, 0);
            }
        });

        // Mostrar el div con texto
        anime({
            targets: divs[currentPosition],
            opacity: 1,
            duration: 2000,
            easing: 'easeInOutCubic'
        });

    } else if (event.deltaY > 0 && currentPosition < cameraPositions.length - 1) {
        // Scroll hacia abajo
        currentPosition++;

        anime({
            targets: camera.position,
            ...cameraPositions[currentPosition],
            duration: 4000,
            easing: 'easeInOutCubic',
            update: function (anim) {
                camera.lookAt(0, 0, 0);
            }
        });

        // Mostrar el div con texto
        anime({
            targets: divs[currentPosition],
            opacity: 1,
            duration: 2000,
            easing: 'easeInOutCubic'
        });
    }
});

// Función de animación
function animate() {
    requestAnimationFrame(animate);
   
    controls.update();
    renderer.render(scene, camera);
}

animate();

