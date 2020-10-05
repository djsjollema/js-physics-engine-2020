const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let img,numberOnARow,numberOnAColumn,sx,sy,sw,sh,x,y,w,h;
img = new Image();
img.src = "images/cardDeck.png";

numberOnARow = 13;
numberOnAColumn = 5;


img.addEventListener('load',()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColumn;
  animate();
})

function animate(){
  context.drawImage(img,0,0,sw,sh, 100,100,sw,sh)
}
