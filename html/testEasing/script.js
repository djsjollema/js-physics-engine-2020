const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdrachtlet myGO;

// declare namespace en scope
let A,B,point,toB,difference,distance;

A = new GameObject(new Vector2d(width*0.2,height*0.2),new Vector2d(1,1),new Vector2d(0,0));
A.radius = 30;
A.color = "red";
B = new GameObject(new Vector2d(width*0.8,height*0.8),new Vector2d(-1,1),new Vector2d(0,0));
B.radius = 30;
B.color = "yellow";
point = new GameObject(new Vector2d(400,200),new Vector2d(0,0),new Vector2d(0,0));
point.color = "black";
difference = new Vector2d(0,0)
toB = true;

difference.difVector(A.pos,B.pos);
distance = difference.magnitude

animate();

//animation loop
function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);

  if(toB){
    difference.difVector(B.pos,point.pos);
  } else {
    difference.difVector(A.pos,point.pos);
  }

  if(difference.magnitude < 40){
    toB = !toB;
  }

  difference.magnitude = EasingFunctions.easeOutCubic(difference.magnitude/distance)*30 ;
  point.pos.sumVector(point.pos,difference);

  A.update();
  B.update();

  A.draw(context);
  B.draw(context);

  point.draw(context);
  point.update()
}

// t = 0 - Animation is just started. Zero time has passed
// b = 200 - The starting position of the objects x-coordinate is 200
// c = 300 - The object has to move 300 to the right, ending at 500
// d = 1 - The object has one second to perform this motion from 200 to 500

function easeOutSine (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
