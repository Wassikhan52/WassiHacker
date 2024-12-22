// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a rotating cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff4500, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add a glowing torus for extra 3D pizzazz
const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    torus.rotation.x -= 0.005;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});