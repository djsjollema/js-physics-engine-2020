const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let img = new Image();
img.src = "images/cog.png";

img.addEventListener('load',function(){
    animate()
})

function animate(){
  requestAnimationFrame(animate)
  context.clearRect(0,0,width,height);
  context.drawImage(img,0,0,200,200)
}
