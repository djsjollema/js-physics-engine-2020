const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,background;
img = new Image();
img.src = "images/nijntje.png"

background = new Image();
background.src = "images/park.png"

img.addEventListener('load',()=>{
  setInterval(animate,10)
})



function animate(){
  context.clearRect(0,0,width,height);
  context.drawImage(background,0,0,width,height)
  context.drawImage(img,500,height-450)
}
