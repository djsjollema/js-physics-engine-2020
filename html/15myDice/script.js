const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


context.font = "80px Arial";


// begin hier met jouw code voor deze opdracht

let dice,val1,val2,score,scoreList;

dice = {};
dice.image = new Image();
dice.image.src = "images/dice.png";

scoreList = [];
for(let i=2;i<=12;i++){
  scoreList.push(0);
}

dice.image.addEventListener('load',()=>{
  dice.width = dice.image.width/6;
  dice.height = dice.image.height;
  setInterval(animate,1000)

})

function animate(){
  val1 = Math.floor(Math.random()*6)+1;
  val2 = Math.floor(Math.random()*6)+1;
  score = val1+val2;
  scoreList[score-2]++
  console.log(score,scoreList)

  context.clearRect(0,0,width,height);
  context.drawImage(
    dice.image,
    (val1-1)*dice.width,
    0,
    dice.width,
    dice.height,
    0,
    0,
    dice.width,
    dice.height);

    context.drawImage(
      dice.image,
      (val2-1)*dice.width,
      0,
      dice.width,
      dice.height,
      dice.width,
      0,
      dice.width,
      dice.height);
  context.fillText(score, 500, 100);
}
