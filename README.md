# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# Third lesson
- here is what we will do in this lesson

    - learn how to animate objects
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

- animation 
    - to create an animation in THREE.js we use window.requestAnimationFrame() which is a function that is applied on the next frame so you might think that we could create a func that calls inside it requestAnimationFrame and we pass the function we created as an argument to it go ahead and paste this code
    ```js
    const loob = () => {
        //what we want to do
        mesh.position.x += 0.01

        //render the renderer
        renderer.render(scene, camera)

        //loop
        window.requestAnimationFrame(loob)
    }
    ```
    you should see your mesh moving right go ahead and play with other properities scale, rotation there is an issue with this animation let me explain to you what is it; some screens have 60 fps and others have 120 fps so the 120 one is gonna run the animation faster so how could we make all screens run the animation at the same speed? we can use the Date object `Date.now()` which returns time in milliseconds and we could get the delta 'the differnce between time now and the previous one' we can do it like that
    ```js
    let time = Date.now()

    const loob = () => {
        // get the delta 
        const currentTime = Date.now()
        const delta = currentTime - time
        time = currentTime

        // animate
        mesh.rotation.y += 0.01 * delta

        //render
        renderer.render(scene, camera)
        window.requestAnimationFrame(loob)
    }

    loob()
    ```
    there's also another way to do the same thing with three.js clock and getElapsedTime method which returns how many seconds has elapsed since creating the clock and here's how to do it 
    ```js
    let clock = new THREE.Clock()

    const loob = () => {
        // get the delta 
        const elapsedSeconds = clock.getElapsedTime()
        // animate
        mesh.rotation.y = 1 * elapsedSeconds

        //render
        renderer.render(scene, camera)
        window.requestAnimationFrame(loob)
    }

    loob()
    ```
    you could try using Math.cos() and Math.sin() and see what happenes, we can also use the animation on the camera try it and see what happens, you can also use a library to do the same things we've been doing, open your terminal and paste this command `npm install gsap@3.12` now open your js file and import it like this `import gsap from 'gsap'` now you can use it like this 
    ```js 
    gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
    const loob = () => {
        
        //render
        renderer.render(scene, camera)
        window.requestAnimationFrame(loob)
    }

    loob()
    ``` 
    you can use whatever way you feel easier to make animation and with that this lesson is over.