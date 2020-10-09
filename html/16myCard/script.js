const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let img,numberOnARow,numberOnAColumn,sx,sy,sw,sh,x,y,w,h,index;
let card,deck;


img = new Image();
img.src = "images/cardDeck.png";

card = {};
card.index =32;
card.position = 32;

card.draw = function(){
  let x= (card.position%numberOnARow)*sw;
  let y = Math.floor(card.position/numberOnARow)*sh

  let sx= (card.index%numberOnARow)*sw;
  let sy = Math.floor(card.index/numberOnARow)*sh
  context.drawImage(img,sx,sy,sw,sh, x,y,sw,sh)
}




numberOnARow = 13;
numberOnAColumn = 5;

index = Math.floor(Math.random()*52);


img.addEventListener('load',()=>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColumn;
  animate();
})

function animate(){
  for(let i = 0; i<52;i++){
    card.index = i;
    card.position = i;
    card.draw()
  }
}
