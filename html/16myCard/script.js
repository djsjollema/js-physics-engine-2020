const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let numberOfDices,dices;

numberOfDices = 4;
dices = [];

for(let i=0;i<numberOfDices;i++){
  dices.push(makeDice())
}

function makeDice(){
  let dice = [];
  for(let i=0;i<6;i++){
    dice[i]=i+1;
  }
  return dice;
}
dices.flat();
console.log(dices.flatMap(v=>[v*2]))
