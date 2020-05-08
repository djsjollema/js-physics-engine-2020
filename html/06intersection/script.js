const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,D,f,g,S;

A = new Point(100,100,20,"red",true);
B = new Point(800,400,20,"green",true);
C = new Point(100,300,20,"blue",true);
D = new Point(700,200,20,"yellow",true);
S = new Point(0,0,10,"white",false);

f = new LinearFunction(1,1);
g = new LinearFunction(1,1);

function animate(){
  context.clearRect(0,0,width,height)
  f.slope = (A.y - B.y)/(A.x - B.x);
  f.intercept = A.y - A.x *f.slope;
  f.draw(context);

  g.slope= (C.y - D.y)/(C.x -D.x);
  g.intercept = D.y - D.x *g.slope;
  g.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  S.x = f.intersection(g).x;
  S.y = f.intersection(g).y;

  S.draw(context)
}

setInterval(animate,10)
