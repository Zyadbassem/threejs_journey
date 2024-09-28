# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# fourth lesson
- here is what we will do in this lesson

    - how to make your canvas at full screen and update it when a user try to resize the window
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
and your js file should have a cube that we can drag and drop with orbietcontrols

### fullsize canvas 
- to have a fullsize canvas follow these steps
    1. connect your css file to your html 
    2. paste this code in your styles.css file
        ```css
        .webgl 
        {
            position: fixed;
            top: 0;
            left: 0;
        }
        ```
    3- run your project and now it should be fullscreen
### update after resizing
- if you try to resize your window you'll notice that the canvas isn't responding as you want it to follow these steps to make the resizing work
    1. we'll use an event listener on the window object and we'll pass 'resize' and a function that updates the sizes of camera, renderer
         ```js
        window.addEventListener('resize', () => {
            // update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            //update camera aspect ratio
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // update the renderer size
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
        ```
    2. now run your project and try resizing and you'll have no issue
### fullscreen
- to have your project on fullscreen when you double click follow these steps
    1. we will use an event listener on window to detect when the user double click and we will add a condition to check if it's on full size or not if true we'll exit the full size else we'll fullsize the screen
        ```js
        window.addEventListener('dblclick', () => {
            if (!document.fullscreenElement) {
                canvas.requestFullscreen()
            }
            else {
                document.exitFullscreen()
            }
        })
        ```
    2. now run your project and you should be able to enter and exit fullscreen with double click and with this our lesson ends

