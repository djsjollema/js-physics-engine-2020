const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope
let A,B,C,l,m,ab,ac;

A = new Point(100,100,15,"red",true,"A");
B = new Point(400,200,15,"blue",true,"B");
C = new Point(200,50,15,"yellow",true,"C");
l = new LinearFunction(2,100);
m = new LinearFunction(2,100)
ab = new Vector2d(B.x-A.x,B.y-A.y );
ac = new Vector2d(C.x-A.x,C.y-A.y );
ad = new Vector2d(ac.dy,-ac.dx);



animate();


function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);
  l.throughTwoPoints(A,B)
  l.draw(context,"red");

  m.throughTwoPoints(A,C);
  m.draw(context,"blue")

  A.draw();
  B.draw();
  C.draw();

  ab.dx = B.x - A.x;
  ab.dy = B.y - A.y;
  ac.dx = C.x - A.x;
  ac.dy = C.y - A.y;

  ad.dx = ac.dy;
  ad.dy = -ac.dx;

  ac.magnitude = 1;
  ac.magnitude = ac.magnitude * ab.dotProduct(ac);

  ad.magnitude = 1;
  ad.magnitude = ad.magnitude * ab.dotProduct(ad);
 
  ac.draw(A.x,A.y,"blue",1)
  ad.draw(A.x,A.y,"blue",1)
  ab.draw(A.x,A.y,"white",1)
  //console.log(ab.dotProduct(ac))


}
