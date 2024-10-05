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

- Side

the side property decides which side of the material is visible by default it's the front side but you can change it

```js
material.side = THREE.DoubleSide;
```

### MeshNormalMaterial

this material have a beautiful color you can see after applying it

- flatShading

flatShading is a new property availble for MeshNormalMaterial go ahead and try it

```js
material.flatShading = true;
```

you'll notice its not smooth as it was or whatever you call it

### MeshMatcapMaterial

this material is so good cause of its performace and it uses a texture that look like a sphere and to apply it u access the matcap property and assign a matcap texture to it

```js
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcaps;
```

### MeshDebthMaterial

this material will color the mesh if the camera is near and uncolor it if the camera is far

```js
const material = new THREE.MeshDepthMaterial();
```

### MeshLambertMaterial

this material is one of the materials that needs a light to be visible so we will add a light to the scene

```js
const material = new THREE.MeshLambertMaterial();

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.setX(3);
pointLight.position.setY(3);
pointLight.position.setZ(3);
scene.add(pointLight);
```

now you'll be able to see your meshs but you will notice strange lines if you get too close to your meshs

### MeshPhongMaterial

just like MeshLambertMaterial but here we got rid of the strange lines we were seeing

```js
const material = new THREE.MeshPhongMaterial();

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.setX(3);
pointLight.position.setY(3);
pointLight.position.setZ(3);
scene.add(pointLight);
```

you will notice there is no lines

- shininess

you can control the reflection powerness and color with this new propaperties shininess and specular

```js
material.shininess = 100;
material.specular = new THREE.Color(0x1188ff);
```

### MeshToonMaterial

MeshToonMaterial is similar to MeshLambertMaterial but in a cartoon way

```js
const material = new THREE.MeshToonMaterial();
```

- gradientMap

By default, you only get a two-part coloration (one for the shadow and one for the light). To add more steps to the coloration, you can use the gradientTexture we loaded at the start of the lesson on the gradientMap property

```js
material.gradientMap = gradients;
```

add this three lines of code to tell the gpu how to handle these 3 pixel images

```js
gradients.minFilter = THREE.NearestFilter;
gradients.magFilter = THREE.NearestFilter;
gradients.generateMipmaps = false;
```

### MeshStandardMaterial

this material is the most used material it's more realistic and uses complex parameter like roughness and metalness

```js
const material = new THREE.MeshStandardMaterial();
```

- roughness and metalness

you can control the metalness and roughness directly

```js
material.metalness = 0.45;
material.roughness = 0.65;
```

- add gui

you can add lil-gui as we learned before so you can see more clearly how roughness and metalness work

```js
gui.add(material, "roughness").min(0).max(1).step(0.001);
gui.add(material, "metalness").min(0).max(1).step(0.001);
```

- add env map

lets change the background and have a nature lights from an image to do this we will import RGBELoader which allows us to load our image and then we will use load func on it to change the background when the image loads

```js
const rgbeLoader = new RGBELoader();
rgbeLoader.load("static/textures/environmentMap/2k.hdr", (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = environmentMap;
  scene.environment = environmentMap;
});
```

now play with the metalness and roughness and see what happens

### more properties

- aomap

we will add our door texture and another property to handle the shadows

```js
material.map = color;
material.aoMap = ambientOcclusion;
material.aoMapIntensity = 1;
```

- displacmentmap

this one will move the vertices to create true relief

```js
material.displacementMap = height;
```

it should look terrible. That is due to the lack of vertices on our geometries and the displacement being way too strong.
Add more subdivisions to the geometries

```js
new THREE.SphereGeometry(0.5, 64, 64),

// ...

new THREE.PlaneGeometry(1, 1, 100, 100),

// ...

new THREE.TorusGeometry(0.3, 0.2, 64, 128),
```

Elevations look more precise, but way too strong. We can control that with the displacementScale property

```js
material.displacementScale = 0.1;
```

now you'll notice that the door got some details but let's add more by adding the roughness and metalness texture

```js
material.metalnessMap = metalness;
material.roughnessMap = roughness;
```

now change metalness and roughness to 1 so it looks better

```js
material.metalness = 1;
material.roughness = 1;
```

The normalMap will fake the normal orientation and add details to the surface regardless of the subdivision:

```js
material.normalMap = normal;
```

You can change the normal intensity with the normalScale property

```js
material.normalScale.set(0.5, 0.5);
```

And finally, you can control the alpha using the alphaMap property

```js
material.transparent = true;
material.alphaMap = alpha;
```

### MeshPhysicalMaterial

The MeshPhysicalMaterial is the same as the MeshStandardMaterial but with the support of additional effects such as clearcoat, sheen, iridescence, and transmission.

```js
const material = new THREE.MeshPhysicalMaterial();
//leave other properties as it is
```

- Clearcoat

The clearcoat will simulate a thin layer of varnish on top of the actual material

```js
material.clearcoat = 1;
material.clearcoatRoughness = 0;

gui.add(material, "clearcoat").min(0).max(1).step(0.0001);
gui.add(material, "clearcoatRoughness").min(0).max(1).step(0.0001);
```

- sheen

The sheen will highlight the material when seen from a narrow angle.

```js
material.sheen = 1;
material.sheenRoughness = 0.25;
material.sheenColor.set(1, 1, 1);

gui.add(material, "sheen").min(0).max(1).step(0.0001);
gui.add(material, "sheenRoughness").min(0).max(1).step(0.0001);
gui.addColor(material, "sheenColor");
```
