let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();

let cube;

function setUp(){
  renderer.setSize(window.innerWidth,window.innerHeight);

  scene.background = new THREE.Color( 0xaaaaaa );

  let texture = new THREE.TextureLoader().load('Johnnyb001.gif');

  let light = new THREE.HemisphereLight();
  scene.add( light );

  document.body.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(2,2,2);
  let material =  new THREE.MeshStandardMaterial({map: texture });
  cube = new THREE.Mesh(geometry,material);
  scene.add(cube);

  camera.position.z = 5;
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  cube.rotation.x += 0.01;
  cube.rotation.y -= 0.02;
}

setUp();
