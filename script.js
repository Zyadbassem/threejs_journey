import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// meshs
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(),
  new THREE.MeshBasicMaterial({ color: "red" })
);
sphere.position.setX(-2);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(),
  new THREE.MeshBasicMaterial({ color: "blue" })
);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(),
  new THREE.MeshBasicMaterial({ color: "green" })
);
torus.position.setX(2.3);

scene.add(sphere);
scene.add(plane);
scene.add(torus);
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

//axes

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);

camera.position.z = 2;
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

//const clock = new THREE.Clock
const loob = () => {
  //let elapsedTime = clock.getElapsedTime()

  //rotation
  //mesh.rotation.y = elapsedTime

  //camera

  controls.update();
  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(loob);
};

loob();
