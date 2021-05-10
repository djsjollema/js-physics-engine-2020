const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope
let GO_a, GO_b,dist,collision,line_ab;

GO_a = new GameObject(new Vector2d(200,200), new Vector2d(2,2), new Vector2d(0,0));
GO_b = new GameObject(new Vector2d(800,300), new Vector2d(-2,-2), new Vector2d(0,0));
line_ab = new LinearFunction(1,0)

GO_a.radius = 75;
GO_b.radius = 75;
GO_a.color = "rgba(255,0,0,0.4)"
GO_b.color = "rgba(0,0,255,0.4)"

distance = Infinity;
collision = false;

animate();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  dist = GO_b.distanceTo(GO_a);
  if(dist < GO_a.radius + GO_b.radius){
    collision = true;
    GO_a.color = "yellow";
    GO_b.color = "orange";
  } else {
    collision = false;
    GO_a.color = "rgba(255,0,0,0.4)";
    GO_b.color = "rgba(0,0,255,0.4)";
  }

  
  drawLine(line_ab,GO_a.pos,GO_b.pos);
  line_ab.draw(context,"blue");

  GO_a.update();
  GO_b.update();

  GO_a.vel.draw(GO_a.pos.dx,GO_a.pos.dy,"rgba(100,100,100,0.4)",70);
  GO_b.vel.draw(GO_b.pos.dx,GO_b.pos.dy,"rgba(100,100,100,0.4)",70);
  
  GO_a.draw(context);
  GO_b.draw(context);
}

function drawLine(line_ab,a,b){
  let dx = b.dx - a.dx;
  let dy = b.dy - a.dy;
  line_ab.slope = dy/dx;
  line_ab.intercept = a.dy - line_ab.slope * a.dx;

}