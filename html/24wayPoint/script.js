const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdrachtlet myGO;

// declare namespace en scope
let point,target,difference,distance,waypoints,numberOfWaypoints, speed, time;

waypoints = [];

target = 1;
time = 0;

//fill the waypoints array
numberOfWaypoints = 10;

for(let i=0; i<numberOfWaypoints;i++){
  let x = Math.floor(Math.random()*width);
  let y = Math.floor(Math.random()*height);
  let waypoint = new GameObject(new Vector2d(x,y),new Vector2d(0,0),new Vector2d(0,0));
  waypoint.color = "white";
  waypoints.push(waypoint);
}

point = new GameObject(new Vector2d(waypoints[0].pos.dx,waypoints[0].pos.dy),new Vector2d(0,0),new Vector2d(0,0),false);
point.radius =10;
point.color ="red";
point.boxed = false;


console.log(point.vel)
animate();


function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);

  waypoints.map((wp,i) =>{
    wp.draw(context)
    drawRoute();
  });

  point.vel.difVector(waypoints[target].pos,point.pos);
  if(point.vel.magnitude < 5){
    target++;
    time = 0;
    if(target > waypoints.length-1){
      target = 0;
    }
  }
  point.vel.magnitude = easeOutSine(time,0,10,2);
  point.draw(context)

  point.update();

  time+= 0.01;

}

// t = 0 - Animation is just started. Zero time has passed
// b = 200 - The starting position of the objects x-coordinate is 200
// c = 300 - The object has to move 300 to the right, ending at 500
// d = 1 - The object has one second to perform this motion from 200 to 500

function drawRoute(){
  context.beginPath();
  context.moveTo(waypoints[0].pos.dx,waypoints[0].pos.dy);
  waypoints.map((wp,i) => {
    context.lineTo(wp.pos.dx,wp.pos.dy);
  })
  context.closePath();
  context.strokeStyle = "rgba(0,0,255,0.01)"
  context.stroke();
  context.strokeStyle = "black";
}

function easeOutSine (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
