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
```
