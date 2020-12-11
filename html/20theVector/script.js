const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace
let pointA, positionVectorA, pointB, positionVectorB,sumVector;

// assign values
positionVectorA = new Vector2d(300,200);
positionVectorB = new Vector2d(100,300);
sumVector = new Vector2d(0,0)

pointA = new Point(100,100,20,"rgba(255,255,30,0.5)",true,"pointA");
pointB = new Point(100,300,20,"rgba(255,255,30,0.5)",true,"pointB");

animate();

//animation loop
function animate(){
  requestAnimationFrame(animate);
  sumVector.sumVector(pointA.position,pointB.position)

  context.clearRect(0,0,width,height);
  pointA.position.draw(0,0,"blue");
  pointB.position.draw(0,0,"red");
  pointB.position.draw(pointA.position.dx,pointA.position.dy,"red");
  sumVector.draw(0,0,"yellow")
  pointA.draw();
  pointB.draw();

}
