const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C;

A = new Point(100,100,20,"red",true);
B = new Point(500,200,20,"green",true);
C = new Point(300,300,20,"blue",true);


function animate(){
  context.clearRect(0,0,width,height);
  A.draw(context);
  B.draw(context);
  C.draw(context);
}

setInterval(animate,10)
