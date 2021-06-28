let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
let camera_velocity = new THREE.Vector3();
let camera_target = 7;

let moon = {},earth = {},vessel = {};

let skybox;
let target= "moon";


function setUp(){
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  earth.texture = new THREE.TextureLoader().load("images/earthmap1k.jpg");
  earth.geometry = new THREE.SphereGeometry(5,32,32);
  earth.material = new THREE.MeshLambertMaterial({map:earth.texture});
  earth.mesh = new THREE.Mesh(earth.geometry,earth.material);
  earth.r = 3;
  earth.phi = Math.PI/2;
  earth.theta = Math.PI/2;
  earth.mesh.position.setFromSphericalCoords(earth.r,earth.theta,earth.phi);
  scene.add(moon.mesh);
  scene.add(earth.mesh);

  moon.texture = new THREE.TextureLoader().load("images/moonmap4k.jpg");
  moon.geometry = new THREE.SphereGeometry(1,32,32);
  moon.material = new THREE.MeshLambertMaterial({map:moon.texture});
  moon.mesh = new THREE.Mesh(moon.geometry,moon.material);
  moon.r = 15;
  moon.phi =0;
  moon.theta = Math.PI/2;
  moon.mesh.position.setFromSphericalCoords(moon.r,moon.theta,moon.phi);
  scene.add(moon.mesh);

  vessel.texture = new THREE.TextureLoader().load("images/metalTexture.jpeg");
  vessel.geometry = new THREE.ConeGeometry( 0.5, 1, 32 );

  vessel.material = new THREE.MeshLambertMaterial({map:vessel.texture});
  vessel.geometry.rotateX(Math.PI/2);
  //vessel.geometry.rotateY(Math.PI/2);

  vessel.mesh = new THREE.Mesh(vessel.geometry,vessel.material);
  //vessel.mesh.DefaultUp = new THREE.Vector3(1,0,0);
  vessel.velocity = new THREE.Vector3(0,0,0.01);
  scene.add(vessel.mesh);


  scene.background = new THREE.Color( 0x000000 );
  skyboxTexture = new THREE.TextureLoader().load("images/starfield.fw.png");
  skyboxGeometry = new THREE.SphereGeometry( 200, 64, 64 );
  skyboxMaterial =  new THREE.MeshBasicMaterial({opacity:0.1,map:skyboxTexture,side:THREE.BackSide});
  skybox = new THREE.Mesh(skyboxGeometry,skyboxMaterial);

  scene.add(skybox);

  let  light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 0, 0 );
  scene.add( light );

  let hlight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.6 );
  scene.add( hlight );

  camera.position.z = 15;
  camera.position.x = 15;
  camera.position.y = 10;
  let camera_velocity =camera.position.clone();
  camera.lookAt(0,0,0);

  vessel.mesh.position.x = 10;

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  moon.mesh.position.setFromSphericalCoords(moon.r,moon.theta,moon.phi);
  earth.mesh.position.setFromSphericalCoords(earth.r,earth.theta,earth.phi);
  earth.mesh.rotation.y -= 0.01;
  moon.mesh.rotation.y -= 0.02;

  if(target == "moon"){
    vessel.mesh.lookAt(moon.mesh.position);
    vessel.velocity = moon.mesh.position.clone().sub(vessel.mesh.position);
    console.log(vessel.velocity.length());
    if(vessel.velocity.length() < 2){
      console.log('naar earth');
      target = " earth";
    }
    vessel.velocity.setLength(0.15);
    vessel.mesh.position.add(vessel.velocity);
  } else {
    vessel.mesh.lookAt(earth.mesh.position);
    vessel.velocity = earth.mesh.position.clone().sub(vessel.mesh.position);
    if(vessel.velocity.length() < 6){
      target = "moon";
    }
    vessel.velocity.setLength(0.01);
    vessel.mesh.position.add(vessel.velocity);
  }




  renderer.render(scene,camera);
  moon.phi -= 0.01;
  earth.phi -= 0.01;
  }

setUp();
