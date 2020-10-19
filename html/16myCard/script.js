const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let deck;

deck = {};
deck.img = new Image();
deck.img.src = "images/cardDeck.png";
deck.selection = [0,6,7,8,9,10,11,12,13,19,20,21,22,23,24,25,26,32,33,34,35,36,37,38,39,45,46,47,48,49,50,51]

deck.img.addEventListener("load",()=>{
  shuffle(deck.selection)
  deck.sw = deck.img.width/13;
  deck.sh = deck.img.height/5;
  animate();
})

function animate(){
  let sx,sy,x,y,scale,cardsOnARow;
  scale = 0.8;
  cardsOnARow = 8;
  deck.selection.map((i,counter)=>{
    sx = i%13 * deck.sw;
    sy = Math.floor(i/13) * deck.sh;
    x = counter%cardsOnARow * deck.sw;
    y = Math.floor(counter/cardsOnARow) * deck.sh;
    console.log(i,counter,deck.img,sx,sy,deck.sw,deck.sh,x,y,deck.sw,deck.sh)
    // context.drawImage(deck.img,sx,sy,deck.sw,deck.sh, 0,0,deck.sw,deck.sy)
    context.drawImage(deck.img,sx,sy,deck.sw,deck.sh,x*scale,y*scale,deck.sw*scale,deck.sh*scale)
  })
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
