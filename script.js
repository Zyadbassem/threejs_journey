import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



//cursor
const cursor = {
    xAxe: 0,
    yAxe: 0
}
window.addEventListener("mousemove", (e) => {
    cursor.xAxe = 2 *(e.clientX / sizes.width - 0.5)
    cursor.yAxe = -2 *(e.clientY / sizes.height - 0.5)
    console.log(`${cursor.yAxe}y, ${cursor.xAxe}x`)
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// groub


const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
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