# Three.js journey

hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference

# tenth lesson

- here is what we will do in this lesson

  - learn about 3D text

## setting up

your directory structure should be looking like this

```html
threejsjourney/(main directory) node_modules/ index.html package-lock.json
package.json script.js
```

and your js file should have a cube and orbietcontrols

### 3D Text

we'll learn how to add a 3d text into our scene first we need to get some font so we can make our geometry and three.js provides us with some fonts we can use these open your node modules folder `/node_modules/three/examples/fonts/` copy and paste helvetiker_regular.typeface.json and LICENSE in your `static/fonts` folder now you need to import a font loader that will allow us to load thefont and then we will call a load function on our loader this load function takes a file path and a call back function

```js
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

//after the scene

const fontLoader = new FontLoader();
fontLoader.load("static/helvetiker_regular.typeface.json", (font) => {
  console.log(font);
});
```

open your console and you'll notice that your font is logged now we need to create a mesh to add it to our scene to create that mesh we need a special geometry that will make the shape of our text copy and paste this code in our callback function and we need to import the TextGeometry first

```js
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
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
const textMaterial = new THREE.MeshBasicMaterial();
const text = new THREE.Mesh(textGeometry, textMaterial);
scene.add(text);
```

refresh the page and you'll notice that you have a 3d text great right but you can also notice that it's not centered so how could we center our text first you should know that every geometry have somthing like an invesible box surronding it so we need to access this box and move our geometry so it will be centered
to do this we will first compute this box on our geometry then we will log the dimentions of our box then we will update it's dimention so it will be centerd

```js
textGeometry.computeBoundingBox();
console.log(textGeometry.boundingBox);
textGeometry.translate(
  -(textGeometry.boundingBox.max.x - 0.02) * 0.5,
  -(textGeometry.boundingBox.max.y - 0.02) * 0.5,
  -(textGeometry.boundingBox.max.z - 0.03) * 0.5
);
```

now you'll notice that it's centerd properly and remember to remove the cube and then remove this whole code and there's already a function that will do this for us

```js
textGeometry.center();
```
