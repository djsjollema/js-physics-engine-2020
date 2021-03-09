const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope
let A, B, posA,posB,difAB,difX,difY;

A = new Point(0.2*width,0.2*height,20,"red",true,"A");
B = new Point(0.8*width,0.3*height,20,"blue",true,"B")

posA = new Vector2d(A.x,A.y);
posB = new Vector2d(B.x,B.y);

difAB = new Vector2d(B.x-A.x,B.y-A.y);
difX = new Vector2d(B.x-A.x,0);
difY = new Vector2d(0,B.y-A.y);


animate();


function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);
  posA.dx = A.x;
  posA.dy = A.y;
  posB.dx = B.x;
  posB.dy = B.y;
  difAB.difVector(posB,posA);
  difX.dx = B.x - A.x;
  difY.dy = B.y - A.y;

 
  B.draw();

  //posA.draw(0,0,"white",1);
  //posB.draw(0,0,"white",1);
  difAB.draw(A.x,A.y,"yellow",1);
  difX.draw(A.x,A.y,"red",1);
  difY.draw(A.x,A.y,"red",1);
  
  A.draw();
}
