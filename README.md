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
```
