import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// Getting the canvas
const canvas = document.querySelector("canvas.webgl");

// Textures
const textureManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(textureManager);
const matcaps = textureLoader.load("static/textures/matcaps/1.png");
matcaps.colorSpace = THREE.SRGBColorSpace;

// Scene
const scene = new THREE.Scene();

// 3D text
const fontLoader = new FontLoader();
fontLoader.load("static/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Hello Three.js", {
    font: font,
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  textGeometry.center();
  const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcaps });
  const text = new THREE.Mesh(textGeometry, textMaterial);
  scene.add(text);
  const donutGeometry = new THREE.TorusGeometry();
  const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matcaps });
  for (let i = 0; i < 250; i++) {
    const donut = new THREE.Mesh(donutGeometry, donutMaterial);
    const randoms = Math.random();
    donut.position.x = (Math.random() - 0.5) * 20;
    donut.position.y = (Math.random() - 0.5) * 20;
    donut.position.z = (Math.random() - 0.5) * 20;
    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;
    const scale = Math.random();
    donut.scale.set(scale, scale, scale);
    scene.add(donut);
  }
});

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
