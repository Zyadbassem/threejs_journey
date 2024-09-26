# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# fourth lesson
- here is what we will do in this lesson

    - get deep with how to control camera object
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

- camera  
       last lesson we learned about animation and by now you propably know how to change the position, rotation and the scale of the camera and how to animate it but in this lesson we'll learn how to make the camera follow our cusor and much more things and there're tow ways to do that the easy way and the hard way let's start with the hard way
    1. hard method  
    here we'll get the cursor x and y location and use this number to control the position of the camera first create an object called cursor and give it two properties xAxe, yAxe and assign them to zero
    ```js
    const cursor = {
        xAxe: 0,
        yAxe: 0
    }
    ```
    then create an event listener func that listens two the mousemove and assign the movement to the cursor properties
    ```js
    window.addEventListener("mousemove", (e) => {
        cursor.xAxe = e.clientX
        cursor.yAxe = e.clientY
    })
    ```
    you'll notice that the number is too high to make it between -1 and 1
    ```js 
    cursor.xAxe = 2 *(e.clientX / sizes.width - 0.5)
    cursor.yAxe = -2 *(e.clientY / sizes.height - 0.5)
    console.log(`${cursor.yAxe}y, ${cursor.xAxe}x`)
    ```
    now how we could control the camera position with this data, create a function like the one we used to use to create an animation and update the position of the camera inside it 
    ```js
    const loob = () => {
        //let elapsedTime = clock.getElapsedTime()
        
        //rotation
        //mesh.rotation.y = elapsedTime

        //camera
        camera.position.x = cursor.xAxe 
        camera.position.y = cursor.yAxe

        //render
        renderer.render(scene, camera)
        window.requestAnimationFrame(loob)
    }

    loob()
    ```
    now you can try and move your cursor and your camera will move with it, now you might be wondring how could we make the camera make a loop around the cube and here comes the math i know most of us hate maths so i'll just drop the code and you can copy and paste it
    ```js
    camera.position.x = Math.sin(cursor.xAxe  * Math.PI) * 3
    camera.position.z = Math.cos(cursor.xAxe  * Math.PI) * 3
    camera.position.y = cursor.yAxe * 3
    camera.lookAt(mesh.position)
    ```
    2. easy method  
    we can use built in controls in the three.js library, there are many types of controls but for now let's use OrbitControls first although its in the three.js library you have to import it seperatly in the top of your js file paste this `import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'` now you const your controls 
    ```js 
    const controls = new OrbietControls(camera, canvas)
    ```
    make sure to paste this code after creating camera, now you can move your camera as you like, drag and drop; you'll notice that rotating your camera isn't smooth to make it smooth you need to enaple Damping and update your controls in your loop func 
    ```js 
    controls.enapleDamping = true

    // in your loop
    controls.update()
    ```
    with this our lesson ends see you in the next lesson


