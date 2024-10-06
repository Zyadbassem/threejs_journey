import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

// Getting the canvas
const canvas = document.querySelector("canvas.webgl");

// Textures
const textureManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(textureManager);
const matcaps = textureLoader.load("static/textures/matcaps/6.png");
matcaps.colorSpace = THREE.SRGBColorSpace;

// Scene
const scene = new THREE.Scene();

// 3D text
const fontLoader = new FontLoader();
fontLoader.load("static/helvetiker_regular.typeface.json", (font) => {
  console.log(font);
});
const material = new THREE.MeshBasicMaterial();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //update camera aspect ratio
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // update the renderer size
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Axes
const helper = new THREE.AxesHelper();
scene.add(helper);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);

camera.position.z = 4;
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
const loob = () => {
  let elapsedTime = clock.getElapsedTime();

  //camera

  controls.update();
  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(loob);
};

loob();
