let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
let camera_velocity = new THREE.Vector3();
let camera_target = 7;

let skybox;

let solarSystem = [];
let planet_name = ["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus"];
let dplanet_istanceRelToEarth = [0,0.3870320856,0.7229946524,1,1.523640642,5.203001337,9.538997326,19.18889162];
let planet_diameterRelToEarth = [5,0.3824082785,0.9488867984,1,0.5326121041,11.20915648,9.449357165,4.007369081];
let textures =["sunmap.jpg","mercurymap.jpg","venusmap.jpg","earthmap1k.jpg","mars_1k_color.jpg","jupitermap.jpg","saturnmap.jpg","uranusmap.jpg","neptunemap.jpg"]

let saturnRing;

function setUp(){
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene.background = new THREE.Color( 0x000000 );
  skyboxTexture = new THREE.TextureLoader().load("images/starfield.fw.png");
  skyboxGeometry = new THREE.SphereGeometry( 200, 64, 64 );
  skyboxMaterial =  new THREE.MeshBasicMaterial({opacity:0.1,map:skyboxTexture,side:THREE.BackSide});
  skybox = new THREE.Mesh(skyboxGeometry,skyboxMaterial);

  scene.add(skybox)
  for(let i = 0; i<planet_name.length;i++){
    let planet = {}
    planet.name = planet_name[i];
    planet.texture = new THREE.TextureLoader().load("images/"+textures[i]);
    planet.geometry = new THREE.SphereGeometry( planet_diameterRelToEarth[i], 32, 32 );
    if(i!=0){
      planet.material =  new THREE.MeshPhongMaterial({map:planet.texture});
    } else{
      planet.material =  new THREE.MeshBasicMaterial({map:planet.texture});

    }
    planet.mesh = new THREE.Mesh(planet.geometry,planet.material);
    planet.r = dplanet_istanceRelToEarth[i]*10;

    planet.theta = 0;
    planet.phi = Math.PI/2;
    planet.mesh.position.y = planet.r * Math.sin(planet.theta) * Math.cos(planet.phi);
    planet.mesh.position.x = planet.r * Math.sin(planet.theta) * Math.sin(planet.phi);
    planet.mesh.position.z = planet.r * Math.cos(planet.theta);
    if(i!=0){
      planet.dTheta = -0.01/i;
    } else {
      planet.dTheta = 0;
    }
    scene.add(planet.mesh);
    solarSystem.push(planet);

  }

  saturnRing_texture = new THREE.TextureLoader().load("images/saturnRing.png");
  saturnRing_geometry = new THREE.RingGeometry( 10, 20, 32 );
  saturnRing_material =  new THREE.MeshPhongMaterial({map:saturnRing_texture});
  saturnRing = new THREE.Mesh(saturnRing_geometry,saturnRing_material);
  scene.add(saturnRing);

  // let axesHelper = new THREE.AxesHelper( 30 );
  // scene.add( axesHelper );

  let  light = new THREE.PointLight( 0xffffff, 1, 1000 );
  light.position.set( 0, 0, 0 );
  scene.add( light );

  let hlight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.5 );
  scene.add( hlight );

  camera.position.z = 45;
  camera.position.x = 45;
  camera.position.y = 10;
  let camera_velocity =camera.position.clone();
  camera.lookAt(0,0,0)
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  for(let i=0; i<solarSystem.length;i++){
    solarSystem[i].mesh.position.y = solarSystem[i].r * Math.sin(solarSystem[i].theta) * Math.cos(solarSystem[i].phi);
    solarSystem[i].mesh.position.x = solarSystem[i].r * Math.sin(solarSystem[i].theta) * Math.sin(solarSystem[i].phi);
    solarSystem[i].mesh.position.z = solarSystem[i].r * Math.cos(solarSystem[i].theta);
    solarSystem[i].mesh.rotation.y -= 0.01;
    solarSystem[i].theta += solarSystem[i].dTheta;
  }

  //saturn saturnRing
  saturnRing.position.x = solarSystem[6].mesh.position.x;
  saturnRing.position.y = solarSystem[6].mesh.position.y;
  saturnRing.position.z = solarSystem[6].mesh.position.z;
  saturnRing.rotation.y -= 0.01;
  saturnRing.lookAt(saturnRing.position.x+10,saturnRing.position.y+100,saturnRing.position.z);


  // camera movement
  // camera_velocity.sub(solarSystem[camera_target].mesh.position);
  // camera.lookAt(solarSystem[camera_target].mesh.position);
  // camera.position.clone(camera_velocity)

  // console.log(solarSystem[0].name,solarSystem[0].r,solarSystem[0].mesh.position.y,solarSystem[0].mesh.position.x)
  renderer.render(scene,camera);
  }

setUp();
