import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import GUI from "lil-gui";

const gui = new GUI();

const canvas = document.querySelector("canvas.webgl");

//Textures
const textureManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(textureManager);

const alpha = textureLoader.load("static/textures/door/alpha.jpg");
const ambientOcclusion = textureLoader.load(
  "static/textures/door/ambientOcclusion.jpg"
);
const color = textureLoader.load("static/textures/door/color.jpg");
const height = textureLoader.load("static/textures/door/height.jpg");
const metalness = textureLoader.load("static/textures/door/metalness.jpg");
const normal = textureLoader.load("static/textures/door/normal.jpg");
const roughness = textureLoader.load("static/textures/door/roughness.jpg");
const matcaps = textureLoader.load("static/textures/matcaps/6.png");
const gradients = textureLoader.load("static/textures/gradients/1.png");

color.colorSpace = THREE.SRGBColorSpace;
matcaps.colorSpace = THREE.SRGBColorSpace;

// Scene
const scene = new THREE.Scene();

const rgbeLoader = new RGBELoader();
rgbeLoader.load("static/textures/environmentMap/2k.hdr", (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = environmentMap;
  scene.environment = environmentMap;
});
// meshs
gradients.minFilter = THREE.NearestFilter;
gradients.magFilter = THREE.NearestFilter;
gradients.generateMipmaps = false;
const material = new THREE.MeshPhysicalMaterial();
material.clearcoat = 1;
material.clearcoatRoughness = 0;

gui.add(material, "clearcoat").min(0).max(1).step(0.0001);
gui.add(material, "clearcoatRoughness").min(0).max(1).step(0.0001);
material.roughness = 0.2;
material.metalness = 0.7;
material.map = color;
material.aoMap = ambientOcclusion;
material.aoMapIntensity = 1;
material.displacementMap = height;
material.displacementScale = 0.1;
material.metalnessMap = metalness;
material.roughnessMap = roughness;
material.metalness = 1;
material.roughness = 1;
material.normalMap = normal;
material.normalScale.set(0.5, 0.5);
material.transparent = true;
material.alphaMap = alpha;

gui.add(material, "roughness").min(0).max(1).step(0.001);
gui.add(material, "metalness").min(0).max(1).step(0.001);
// material.gradientMap = gradients;
//const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//scene.add(ambientLight);
// material.shininess = 100;
// material.specular = new THREE.Color(0x1188ff);

const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.setX(3);
pointLight.position.setY(3);
pointLight.position.setZ(3);
scene.add(pointLight);
// material.color = new THREE.Color(0xff0000);
//material.transparent = true;
// material.opacity = 0.2;
// material.alphaMap = alpha;
//material.side = THREE.DoubleSide;
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material);
sphere.position.setX(-2);

const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 64, 128),
  material
);
torus.position.setX(2.3);

scene.add(sphere, plane, torus);

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

  torus.rotation.y = elapsedTime * 0.1;
  plane.rotation.y = elapsedTime * 0.1;
  sphere.rotation.y = elapsedTime * 0.1;

  torus.rotation.x = elapsedTime * -0.15;
  plane.rotation.x = elapsedTime * -0.15;
  sphere.rotation.x = elapsedTime * -0.15;

  //camera

  controls.update();
  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(loob);
};

loob();
