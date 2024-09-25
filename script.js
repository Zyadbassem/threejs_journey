import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// groub
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
group.scale.y = 2
group.position.y = 1
group.rotation.x = Math.PI * 0.5
scene.add(group)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//axes 
const axes = new THREE.AxesHelper(1)//the length of the axes
scene.add(axes)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 3


scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
