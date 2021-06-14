const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope
let moon,earth,sun,earthVector,earthAngle;

//x,y,radius,color,draggable,label
sun = new Point(width/2,height/2,30,"yellow",false,"sun");
earth = new Point(0,0,10,"lightblue",false,"earth");
earthVector = new Vector2d(0,0);
earthAngle = 0;


animate();

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(0,0,0,0.3)";
  context.fillRect(0,0,width,height);
  sun.draw();

  earthVector.magnitude = 100;
  earthVector.angle = earthAngle;
  earthVector.sumVector(earthVector,sun.vPos)
  earth.vPos = earthVector;
  earth.draw();
  earthAngle += 0.05;
}