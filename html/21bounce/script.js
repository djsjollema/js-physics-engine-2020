const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace en scope
let point,position,velocity;

// assign values
point = new Point(200,300,15,"red",false,"p");
position = new Vector2d(0,0);
velocity = new Vector2d(2,3);

animate();

//animation loop
function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate)
  point.draw();
  point.vPos.draw(0,0,"yellow");
  position.sumVector(position,velocity);
  point.vPos = position;
  if(point.vPos.dy > height){
    velocity.dy = -velocity.dy;
  }
}
