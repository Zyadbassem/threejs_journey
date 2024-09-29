# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# seventh lesson
- here is what we will do in this lesson

    - learn about gui and debugging
## setting up 
your directory structure should be looking like this
```html
    threejsjourney/(main directory)
        node_modules/
        index.html
        package-lock.json
        package.json
        script.js
```
and your js file should have a cube and orbietcontrols

### gui
- GUI allows you to edit your camera, mesh with a graphics interface, there are many guis you can use but in this lesson we're gonna use lil-gui to download it open your terminal and paste this `npm install lil-gui` now we'll import it to our js file and create a new constant and assign it to new gui and we will add our mesh position and 'y' as an arguments to add method
    ```js
    import GUI from 'lil-gui'
    const gui = new GUI()
    // After creating the mesh
    gui.add(mesh.position, 'y')
    .min(-3)
    .max(3)
    .step(0.01)
    ```
    you'll notice that at the top right corner you can edit the y position of your object and that's just the begining we'll add much more things we can edit together but first not to make everything look messy I'll teach you how to create a folder we will create a new constant and assign it to gui.assfolder(name) name is a string whatever you want to name your folder
    ```js
    const cube = gui.addFolder("cube")
    //after creating our mesh 
    cube.add(mesh.position, 'y')
    .min(-3)
    .max(3)
    .step(0.01)
    .rename('position y')
    ```
    you'll notice in your browser it's more organized so when we add more meshs and maybe a camera it won't be messy, now let's add more things to edit, we'll add a checkbox that controls the visiblty of our cube and one for x scale and maybe one for rotation aswell
    ```js 
    cube.add(mesh, 'visible')
    cube.add(mesh.scale, 'x')
    .min(1)
    .max(3)
    .step(0.01)
    .rename('scale x')
    cube.add(mesh.rotation, 'z')
    .min(1)
    .max(3)
    .step(0.01)
    .rename('rotate z')
    ```
    now in the last lesson we talked about faces and the points that creates a face so how could we increase our faces on each Axe of the cube first we can't access it directly as we did with the previous properties so we will create an embty object and give it a property called faces and assign it to 0 and we will add it to the cube like we did before except that we'll give it onFinishChange property that will take a function in that function we'll elapse the previous geometry and add a new one with the value of the faces property
    ```js
    const cubeController = {
        faces: 1
    }
    cube.add(cubeController, 'faces')
    .min(1)
    .max(10)
    .step(1)
    .onFinishChange(() => {
        mesh.geometry.dispose()
        mesh.geometry = new THREE.BoxGeometry(
            1,1,1,
            cubeController.faces,
            cubeController.faces,
            cubeController.faces,
        )
    })
    ```
    see? that wasn't so hard now let's try to edit the color the same way but small change instead of add we're gonna use addColor
    ```js
    cube.addColor(mesh.material, 'color')
    ```
    you'll notice that when you change the color and then want this color to apply to your cube so you get the color code and paste it in material.color and refresh the page that you don't get the same color to fix this issue we'll use our cube controller we used earilier we'll give it a proberty called color and we'll use it when we're creating the material and then we'll add it the same way we added the faces to our cube folder 
    ```js
    const cubeController = {
    faces: 1,
    color: "#e63b7a"
    }
    const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: cubeController.color, wireframe: true })
    )
    cube.addColor(cubeController, 'color')
    .onChange(() => {
        mesh.material.color.set(cubeController.color)
    })
    ```
