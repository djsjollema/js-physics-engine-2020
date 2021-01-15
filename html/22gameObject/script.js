const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdrachtlet myGO;

// declare namespace en scope
let myGO;


// assign values
myGO = new GameObject(new Vector2d(200,200),new Vector2d(4,5),new Vector2d(0,1));

animate();

//animation loop
function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);
  myGO.update();
  myGO.draw(context);
  myGO.vel.draw(myGO.pos.dx,myGO.pos.dy,"rgba(255,0,0,0.2)",10)
}
