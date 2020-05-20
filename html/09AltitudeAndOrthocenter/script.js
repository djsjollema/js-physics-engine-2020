const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace

let A,B,C,ab,bc,ca,altitudebc;

A = new Point(100,100,15,"red",true);
B = new Point(400,150,15,"blue",true);
C = new Point(300,400,15,"green",true);

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);
altitudebc = new LinearFunction(1,1)

function animate(){
  context.clearRect(0,0,width,height);
  //path for triangle
  context.fillStyle = "rgba(255,255,0,0.4)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath()
  context.stroke();
  context.fill();

  ab.slope = (B.y - A.y)/(B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope = (C.y - B.y)/(C.x - B.x);
  bc.intercept = B.y - B.x*bc.slope;
  bc.draw(context);

  ca.slope = (C.y - A.y)/(C.x - A.x);
  ca.intercept = C.y - C.x*ca.slope;
  ca.draw(context);

  altitudebc.slope = -1/bc.slope;
  altitudebc.intercept = A.y - A.x*altitudebc.slope;
  altitudebc.draw(context)

  A.draw(context);
  B.draw(context);
  C.draw(context);
}

setInterval(animate,10);
