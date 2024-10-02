# Three.js journey

hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference

# eighth lesson

- here is what we will do in this lesson

  - learn about textures

## setting up

your directory structure should be looking like this

```html
threejsjourney/(main directory) node_modules/ index.html package-lock.json
package.json script.js
```

and your js file should have a cube and orbietcontrols

### Textures

this lesson is gonna be kinda long so let's start what's textures? textures is simply an image that we use to cover our mesh instead of a color so it could be any image so how could we use these images there's an easy way and a hard one

- hard way

  we'll load a photo that's stored in our main directorty or you can create a static folder to use it to store your static files after doing this we need to convert our image to a texture and we will need to update it in on load functions let's not talk too much and let's code

  ```js
  const image = new Image();
  const texture = new THREE.Texture(image);
  texture.colorSpace = THREE.SRGBColorSpace;
  image.onload = () => {
    texure.needsUpdate = true;
  };
  image.src = "door.jpg";
  // where you create your mesh
  const material = new THREE.MeshBasicMaterial({ map: texture });
  ```

  you'll notice that the red color we were always seeing is no longer here and we have what looks like a door image covering our mesh now let's learn the easy way

- easy way
  we'll use the texture loader which comes with threejs and it'll only take us three lines
  ```js
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("door.jpg");
  //don't forget to add it to your mesh
  ```
  and voila just like that your image is converted to texture successfully
