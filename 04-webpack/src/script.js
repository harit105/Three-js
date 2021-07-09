/*import './style.css'
import * as THREE from 'three'
console.log(THREE.PerspectiveCamera)

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera) */
const colors = [...'🟦🟩🟨🟧🟥🟪'];
let output = '';

for (let y = 0; y < 11; y++) {
  for (let x = 0; x < 11; x++) {
    let v = (x * y) >> 4;
    //let v = 12 - (x+y);
    //let v = (x*y) % 10 -1;
    let color = colors[v];
    output += color || '⬛';
  }
  output += '\n';
}

console.log('\n' + output);
