# Three.js journey
hey there my name is zyad and this is my three.js learning journey i'm using the three.js documentaion and three.js journey course by Bruno smith as a reference
# first lesson
- here is what we will do in this lesson

    1. learn the installation and basics of node.js , three.js and vite and how to run a local server 
    1. learn the basics of dealing with scenes, camera, mesh
## node.js, three.js & vite

here we will learn how to install node and run our local server follow these steps

- install node.js
    - you can first check if it's already installed by running `node -v` on the terminal and if it's not installed you can install it from [here](https://nodejs.org/en/download/package-manager)
- initialize node
    - in this step you need to create a folder and open it in your code editor then open the terminal and run `npm init -y` this will initialize a node server 
- installing vite and three
    - open your terminal and run these commands   
        `npm install vite`  
        `npm install three`  
        this should install the required libraries for this course and you should have
         ```html 
         threejsjourney/(main directory)
            node_modules/
            package.json
            package.json
        ```
        now open the package.json file go down to "scripts" and copy and paste this code 
        ```js
        "dev": "vite",
        "build": "vite build"
        ```
        these scripts will allow us to run the server and deploy it afterwords 

