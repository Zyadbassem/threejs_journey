# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# fourth lesson
- here is what we will do in this lesson

    - learn about geometries and vertices and faces
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
and your js file should be as we left it in the last lesson

### geomertries
- in the previous lessons we used BoxGeometry to create a simble cube but do you know how this cube was made? every cube is made of faces and each face is made of three vertices and I'll teach you how to create a geometry from scratch follow these stips
    1. we already know that each geometry is made of faces and each face is made of three vertices then how could we create these vertices? first we will create a float32array which is a type of arrayes that stores only floats and we will pass to it 9 values 3 for each veticy and we'll create three vertices to make one face
        ```js
        // create the array
        const positionsArray = new Float32Array([
            0,0,0,
            0,1,0
            1,0,0
        ])

        ```
    2. now we'll create a position attribute that will be passed to our geometry as an attribute and it's called BufferAtribute and it takes two arguments: our array and how many points makes a face which is usually 3
        ```js
        const positionAttribute = new THREE.BufferAttribute(positionArray, 3)
        ``` 
        now we'll create our geometry and pass to it its attribute
        ```js
        const meshGeometry = new THREE.BufferGeometry()
        meshGeometry.setAttribute('position', positionAttribute)
        ```
        pass your geometry to your mesh and run the project now let's try to create more of this faces first we will create 50 faces so create a constant called faces and give it the value 50, now create an array constant and assign each value to a random value and then create a bufferAttribute and a mesh geometry 
        ```js
        const meshGeometry = new THREE.BufferGeometry()
        const faces = 50
        const positions = faces * 3 * 3
        const positionsArray = new Float32Array(positions) // a face contains 3 vertices and a verticy needs 3 positions
        for(let i = 0; i < positions; i++){
            positionsArray[i] = Math.random() - 0.5
        }
        const positionAttribute = new THREE.BufferAttribute(positionsArray, 3)
        meshGeometry.setAttribute('position', positionAttribute)
        const mesh = new THREE.Mesh(meshGeometry, new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true}))
        scene.add(mesh)
        ```
        and with this our lesson ends .
