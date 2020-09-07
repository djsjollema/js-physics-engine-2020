const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,angle,img2,x;

x = 0;

img = new Image();
img.src = "images/cog.png";

img2 = new Image();
img2.src = "images/landscape.jpg"

angle = 0.1;

img2.addEventListener('load',()=>{
  setInterval(animate,10)
})

function animate(){
  context.clearRect(0,0,width,height);
  context.drawImage(img2,0,0,width,height);
  context.save();
  context.translate(x,300);
  context.rotate(angle);

  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01;
  x+=1;
}
