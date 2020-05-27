const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C,ab,bc,ca,mAB;
A = new Point(0.10 * width,0.10*height,20,"red",true,"A");
B = new Point(0.90 * width,0.10*height,20,"green",true,"B");
C = new Point(0.50 * width,0.90*height,20,"blue",true,"C");
ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);


function animate(){
  context.clearRect(0,0,width,height);
  context.beginPath();
  context.fillStyle = "rgba(255,255,0,0.2)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke();
  context.fill();

  ab.slope = (B.y - A.y) / (B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope = (B.y - C.y) / (B.x -C.x);
  bc.intercept = B.y - B.x*bc.slope;
  bc.draw(context);

  ca.slope = (C.y - A.y) / (C.x - A.x);
  ca.intercept = C.y - C.x*ca.slope;
  ca.draw(context);

  A.draw();
  B.draw();
  C.draw();



}

setInterval(animate,10);
