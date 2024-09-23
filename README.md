# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# first lesson
- here is what we will do in this lesson

    1. learn the installation and basics of node.js , three.js and vite and how to run a local server 
    1. learn the basics of dealing with scenes, camera, mesh
## node.js, three.js & vite

here we will learn how to install node and run our local server follow these steps

- Install node.js
    - you can first check if it's already installed by running `node -v` on the terminal and if it's not installed you can install it from [here](https://nodejs.org/en/download/package-manager)
- Initialize node
    - in this step you need to create a folder and open it in your code editor then open the terminal and run `npm init -y` this will initialize a node server 
- Installing vite and three
    - open your terminal and run these commands   
        `npm install vite`  
        `npm install three`  
        this should install the required libraries for this course and you should have
         ```html 
         threejsjourney/(main directory)
            node_modules/
            package-lock.json
            package.json
         ```
        now open the package.json file go down to "scripts" and copy and paste this code 
        ```js
        "dev": "vite",
        "build": "vite build"
        ```
        these scripts will allow us to run the server and deploy it afterwords 
- Creating html & js files
    - create an html file and call it index.html and paste this code inside 
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ThreeJsTutorial</title>
            <style> 
            * {
                margin: 0;
                padding: 0;
            }
            </style>
        </head>
        <body>
            <canvas class="webgl"></canvas>
            <script type="module" src="./script.js"></script>
        </body>
        </html>
        ```
    - now create a new file called script.js and leave it empty for now your main directory should look like this
        ```html 
        threejsjourney/(main directory)
        node_modules/
        index.html
        package-lock.json
        package.json
        script.js
        ```
        
## Three.js basics
In this section I'll teach you how to deal with scene, mesh, camera, renderer first open your script.js file and import three library  
```js
import * as THREE from 'three'
```
then we need to create a scene to do this we will create a constant called scene and initialize it to scene class from three library 
```js
const scene = new THREE.Scene()
```
now we need to create an object aka mesh and to do that we need a geometry and material its really similar to creating a scene first we will create a geometry with BoxGeometry class which takes three arguments x, y, z for the object we're creating 
```js 
const geometry = new THREE.BoxGeometry(1, 1, 1)
```
after doing this we need to create a material with MeshBasicMaterial class which takes a color argument
```js
const material = new THREE.MeshBasicMaterial({ color: 0fx0000 })
```
now we will create our mesh wich takes two arguments geometry and material and then we will add it to our scene
```js
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
```
now we need a camera think of it like you're playing a  first person point of view game so you need to add an angle of view and width and height of what you see you can create a sizes object which will make things much easier for you
```js 
const sizes = {
    width: 600,
    height: 600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
```
you might be wondering why did i change the position of the camera thats because it will be by default at the same position as our object so we wont be able to see the object so i had to change its position

here we are heres our last step we need a renderer that can render our page this render takes one argument which is the canvas element we added in our html file 
```js 
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".webgl")
})
```
now to render the renderer we'll add our sizes and use the render method on it which takes a scene and a camera 
```js
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```
now open your terminal and run   
`npm run dev`
open the link on your browser and you should see a black wallpaper with your object in there
