const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope

let A, B,S, l,m,player,collision;

//x,y,radius,color,draggable,label
A = new Point(100,100,15,"red",true,"A");
B = new Point(500,200,15,"red",true,"B");
S = new Point(0,0,10,"white",false,"s");

l = new LinearFunction(1,0);
m = new LinearFunction(1,0);
player = new GameObject(new Vector2d(300,300),new Vector2d(2,2),new Vector2d(0,0));
player.radius = 20;
player.color = "white";
player.rad = new Vector2d(1,1);
player.tan = new Vector2d(1,1);

collision = false;


anime()

function anime(){
  requestAnimationFrame(anime);
  context.clearRect(0,0,width,height);

  l.throughTwoPoints(A,B)
  l.draw(context,"blue");

  m.slope = -1/l.slope;
  m.intercept = player.pos.dy - m.slope * player.pos.dx;
  m.draw(context,"black");

  A.draw();
  B.draw();
  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  player.rad.dx =  S.x - player.pos.dx;
  player.rad.dy = S.y - player.pos.dy;

  player.tan.dx = player.rad.dy;
  player.tan.dy = -player.rad.dx;

  if(player.rad.magnitude < player.radius){
    collision = true;
  } else{
    collision = false;
  }

  player.rad.magnitude = 1;
  player.rad.magnitude = player.vel.dotProduct(player.rad);
  
  player.tan.magnitude = 1;
  player.tan.magnitude = player.vel.dotProduct(player.tan);
   
  if(collision){
    player.rad.dx = -player.rad.dx;
    player.rad.dy = - player.rad.dy;
    player.vel.sumVector(player.rad,player.tan);
  }

  S.draw();
  player.update();
  player.vel.draw(player.pos.dx,player.pos.dy,"white",50);
  player.rad.draw(player.pos.dx,player.pos.dy,"blue",50);
  player.tan.draw(player.pos.dx,player.pos.dy,"red",50);
  player.draw(context)
}