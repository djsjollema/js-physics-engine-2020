const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace
let pointA, positionVector;

// assign values
positionVector = new Vector2d(300,200);

pointA = new Point(100,100,20,"rgba(255,255,30,0.5)",true,"pointA");

animate();

//animation loop
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  pointA.draw()
}
