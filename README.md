# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# second lesson
- here is what we will do in this lesson

    - learn how to change the position, scale, rotation of an object 
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
and your files content should be like how we left it in the first lesson with that let's start this lesson


- position
    - we dealed with this class in the last lesson when we needed to change the z position of our camera so that we can see our mesh object now we will go deeply into this class 
        - so how can we change the position of our cube? you can do the same you did with the camera 
            ```js
            mesh.position.x = 1
            mesh.position.y = 0.5
            mesh.position.z = 0.5
            ```
            or there's an easier way to do it 
            ```js
            mesh.position.set(1, 0.5, 0.5)
            ```
            the x controls the right and left of the object, the y controls the up and lower of the object, the z controls the debth of screen of the object feel free to play around
            the length functions return the length from the 0 point
            ```js
            console.log(mesh.position.length())
            ```
            the distanceTo func return the distance to an object (use this code after creating the camera )
            ```js
            console.log(mesh.position.distanceTo(camera.position))
            ```
            the normalize func normalize the length of an object to 1 
            ```js
            mesh.position.normalize()
            console.log(mesh.position.length())
            ```
- Axes helper
    - the three.js library provide you with an axes helper that you can use 
    ```js 
    const axes = new THREE.AxesHelper(2)//the length of the axes
    scene.add(axes)
    ```
    you'll notice that you can't see the z axe that because the camera is in the direction of the axe; change the position of the camera so that you can see the z axe
- scale object
    - scale works very much like position you can play around with it
    ```js
    mesh.scale.x = 2
    mesh.scale.y = 0.25
    mesh.scale.z = 0.5
    ```

- rotation object
    - did you know that you can rotate your object just very similar to the way you change its postition and scale
    ```js
    mesh.rotation.x = Math.PI * 0.25
    mesh.rotation.y = Math.PI * 0.25
    ```
    you might be wandring why we use pi so let me tell you the easy way with no much math so when you rotate it 3.14(pi) its a half a rotation so if you want a full rotation you can rotate it pi * 2 and that way you can control your rotation, it's better to use `mesh.rotation.reorder('YXZ')` so that your rotation  doesn't ruin your object, Quaternion is also some kind of rotation you don't need to learn it now cause it's so complicated, the lookAt function is used to make your camera lookat a position of an object you can use it like this
    ```js
    camera.lookAt(mesh.position)
    ```
- compining transformation
    - you can use position, rotation, scale in any order just do whatever you like

- grouping
    - you might want to groub some of your objects so that you can position, scale, rotate all of them at the same time go ahead and delete your cube and paste this code
    ```js
    const group = new THREE.Group()

    const cube1 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    )
    const cube2 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    const cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0x0000ff })
    )
    cube2.position.x = 2
    cube3.position.x = -2
    group.add(cube1)
    group.add(cube2)
    group.add(cube3)
    scene.add(group)
    ```
    now try to play around with the scale or position of your groub.
    and with this we finished our second lesson