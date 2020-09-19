const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let map_hi,map_lo,scale;
map_hi = new Image();
map_hi.src = "images/map_highres.jpg";

let point = new Point(10,10,100,"white",true)

map_lo = new Image();
map_lo.src = "images/map_lowres.jpg";

scale = map_hi.width/map_lo.width;
console.log(scale);

setInterval(animate,10)

function animate(){
  context.clearRect(0,0,width,height);

  context.drawImage(map_lo,0,0);
  point.draw(context);
  context.fillRect(point.x -105,point.y - 105,210,210)
  context.drawImage(map_hi,2.5*(point.x-100)+100,2.5*(point.y-100)+100,200,200,point.x-100,point.y-100,200,200);

}
