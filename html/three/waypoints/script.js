let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();

let points = [];
let player = {};

function setUp(){
  renderer.setSize(window.innerWidth,window.innerHeight);
  scene.background = new THREE.Color( 0x333333 );
  document.body.appendChild(renderer.domElement);

  for(let i = 0; i<6; i++){
    let point = {};
    point.geometry = new THREE.BoxGeometry(2,2,2);
    point.material =  new THREE.MeshBasicMaterial({wireframe:true,color:0xffff00});
    point.mesh = new THREE.Mesh(point.geometry,point.material);
    point.mesh.position.x = Math.random()*20 - 10;
    point.mesh.position.y = Math.random()*20 - 10;
    point.mesh.position.z = Math.random()*20 - 10;
    scene.add(point.mesh);
    points.push(point);
  }

  player.geometry = new THREE.SphereGeometry(1,16,16);
  player.material =  new THREE.MeshBasicMaterial({wireframe:true,color:0xffff00});
  player.mesh = new THREE.Mesh(player.geometry,player.material);
  player.mesh.position.x = points[0].mesh.position.x;;
  player.mesh.position.y = points[0].mesh.position.y;;
  player.mesh.position.z = points[0].mesh.position.z;;
  player.target = 1;
  player.velocity = new THREE.Vector3(player.mesh.position.clone().sub(points[1].mesh.position));
  player.velocity.length = 0.1;

  scene.add(player.mesh);

  let frame = {};
  frame.material = new THREE.LineBasicMaterial({color:0x00ff00});
  frame.geometry = new THREE.Geometry();
  for(let i=0; i<points.length;i++){
    frame.geometry.vertices.push(points[i].mesh.position);
  }
  frame.geometry.vertices.push(points[0].mesh.position);

  frame.line = new THREE.Line(frame.geometry,frame.material);
  scene.add(frame.line)

  camera.r = 15;
  camera.phi = Math.PI/2;
  camera.theta = 0;
  camera.position.setFromSphericalCoords(camera.r,camera.phi,camera.theta);

  var geometry = new THREE.SphereBufferGeometry( 30, 32, 32 );

  var wireframe = new THREE.WireframeGeometry( geometry );

  var line = new THREE.LineSegments( wireframe );
  line.material.depthTest = false;
  line.material.opacity = 0.5;
  line.material.transparent = true;

  scene.add( line );

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  for(let i=0; i<points.length; i++){
    // points[i].mesh.rotation.x += 0.01;
    // points[i].mesh.rotation.y -= 0.02;
  }
  player.velocity = player.mesh.lookAt(points[player.target].mesh.position);
}

setUp();

addEventListener("keydown",(evt)=>{
  switch (evt.key) {
    case "ArrowUp":
      camera.phi -=0.1;
    break;
    case "ArrowDown":
      camera.phi += 0.1;
    break;
    case "ArrowLeft":
      camera.theta += 0.1;
    break;
    case "ArrowRight":
      camera.theta -= 0.1;
    break;

    default:

  }
  camera.position.setFromSphericalCoords(camera.r,camera.phi,camera.theta);
  camera.lookAt(new THREE.Vector3(0,0,0));
})
