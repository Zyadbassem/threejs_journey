import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

const gui = new GUI()

const cube = gui.addFolder("cube")
    

const cubeController = {
    faces: 1,
    color: "#e63b7a"
}
//cursor


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// mesh
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: cubeController.color, wireframe: true })
)

cube.addColor(cubeController, 'color')
.onChange(() => {
    mesh.material.color.set(cubeController.color)
})
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


cube.add(mesh.position, 'y')
.min(-3)
.max(3)
.step(0.01)
.name('position y')

cube.add(mesh, 'visible')

cube.add(mesh.scale, 'x')
.min(1)
.max(3)
.step(0.01)
.name('scale x')

cube.add(mesh.rotation, 'z')
.min(0)
.max(3)
.step(0.01)
.name('rotate z')
scene.add(mesh)


//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

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

window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen()
    }
    else {
        document.exitFullscreen()
    }
})

//axes 

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 3
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)


//const clock = new THREE.Clock
const loob = () => {
    //let elapsedTime = clock.getElapsedTime()
    
    //rotation
    //mesh.rotation.y = elapsedTime

    //camera
   
    controls.update()
    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(loob)
}

loob()