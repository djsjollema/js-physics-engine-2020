const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC;
let line;
let S;

A = new Point(100,100,20,"red",true,"A");
B = new Point(600,150,20,"green",true,"B");
C = new Point(300,300,20,"blue",true,"C");
S = new Point(10,10,5,"black",false,"S");

MBC = new Point(50,50,10,"white",false,"MMBC");

lAB = new LinearFunction(0.5,1);
lAMBC = new LinearFunction(2,100);
line = new LinearFunction(1,1);

function animate(){
  context.clearRect(0,0,width,height)
  A.draw();
  B.draw();
  C.draw();

  S.x = lAB.intersection(line).x;
  S.y = lAB.intersection(line).y;

  S.draw();

  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MBC.draw()

  lAB.slope = (B.y - A.y)/(B.x - A.x);
  lAB.intercept = B.y - B.x * lAB.slope;

  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = A.y - A.x * lAMBC.slope;

  lAB.draw(context,"red");
  lAMBC.draw(context,"gray")
  line.draw(context,"blue");


}

setInterval(animate,10)
