const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdrachtlet myGO;
let A,B, point,dif,distance,gotoB;

// declare namespace en scope
A = new GameObject(new Vector2d(100,100),new Vector2d(0,0),new Vector2d(0,0));
B = new GameObject(new Vector2d(400,300),new Vector2d(0,0),new Vector2d(0,0));
point = new GameObject(new Vector2d(200,200),new Vector2d(-1,1),new Vector2d(0,0));
//point.vel.magnitude = 2;
dif = new Vector2d(0,0);
dif.difVector(B.pos,point.pos);
gotoB = true;

animate();

//animation loop
function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);
  A.draw(context);
  B.draw(context);

  distance = dif.magnitude;

  if(gotoB){
    console.log('toB');
    dif.difVector(B.pos,point.pos);
    if(distance < 10){
      gotoB = false;
    }
  } else {
    console.log('toA');
    dif.difVector(A.pos,point.pos);
    if(distance < 10){
      gotoB = true;
    }
  }


  console.log(distance)

  point.draw(context);
  point.vel.draw(point.pos.dx,point.pos.dy,"red",20);
  //dif.draw(point.pos.dx,point.pos.dy,"blue",1);

  point.vel.sumVector(point.vel,dif);
  point.vel.magnitude =1;
  point.update();
}
