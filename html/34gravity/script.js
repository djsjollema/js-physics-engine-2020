const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope
let earth, moon,distance;

//pos,vel,acc,boxed
earth = new GameObject(new Vector2d(width/2,height/2),new Vector2d(0,0),new Vector2d(0,0),false);
earth.radius = 100;
earth.color = "lightblue";
moon = new GameObject(new Vector2d(300,300),new Vector2d(5,-2),new Vector2d(0,0),false);;
moon.radius = 20;
moon.color = "beige";
distance = 0;

animate();

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(0,0,0,0.6)";
  context.fillRect(0,0,width,height);

  moon.acc.difVector(earth.pos,moon.pos);
  distance = moon.acc.magnitude;

  moon.acc.magnitude = 10000/(distance*distance);
  moon.update();
  earth.draw(context);
  moon.draw(context);
  //x,y,vcolor,scale
  moon.acc.draw(moon.pos.dx,moon.pos.dy,"orange",100)
}