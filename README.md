# Three.js journey

hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference

# ninth lesson

- here is what we will do in this lesson

  - learn about materials

## setting up

your directory structure should be looking like this

```html
threejsjourney/(main directory) node_modules/ index.html package-lock.json
package.json script.js
```

and your js file should have a cube and orbietcontrols

## Materials

materials is what is covering each pixel of the mesh in this lesson we will learn about materials first of all i want you to delete the cube and create three meshs sphere, plane, torus the sphere should be on the left, the torus should be on the right and the plane should be on the middle go ahead and do it and if you could not just paste this code

```js
// meshs
const material = new THREE.MeshBasicMaterial();

const sphere = new THREE.Mesh(new THREE.SphereGeometry(), material);
sphere.position.setX(-2);

const plane = new THREE.Mesh(new THREE.PlaneGeometry(), material);
const torus = new THREE.Mesh(new THREE.TorusGeometry(), material);
torus.position.setX(2.3);

scene.add(sphere, plane, torus);
```

now go ahead and animate them so the rotate in our loob function

```js
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
```

now let's load some textures i provided you with a static folder that contain all textures we need

```js
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
const matcaps = textureLoader.load("static/textures/matcaps/1.png");
const gradients = textureLoader.load("static/textures/gradients/3.png");

color.colorSpace = THREE.SRGBColorSpace;
matcaps.colorSpace = THREE.SRGBColorSpace;
```

now let's talk about types of material and its properties

### MeshBasicMaterial

we have been using mesh basic material since the first lesson but we never talked about its properties so let's do this now

- Color

we have been using the color property as a parameter but i will show u another way to access the color property

```js
material.color = new THREE.Color(0xff0000);
```

this way you can change the material color and it's up to you to use this way or the previous one

- map

like color we can use this way to access the map property instead of the parameter way

```js
material.map = color;
```

- wireframe

and its just the same as color and map

```js
material.wireframe = true;
```

- opacity
  and this is a new property we never talked about this property controls the opacity of the mesh but you first have to make it able to do this

```js
material.transparent = true;
material.opacity = 0.3;
```

you will notice it's turning grey cause the background is black

- AlphaMap

now we have our material transparent we can use alpha map

```js
material.alphaMap = alpha;
```
