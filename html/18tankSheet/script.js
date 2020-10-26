const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace

let spriteSheet,sw,sh,greenTank;

spriteSheet = new Image();
spriteSheet.src = "images/tanksheet.png";

greenTank = {};
greenTank.animationArray = [1,2,3,4,5,6,7,8];
greenTank.index = 0;

greenTank.draw = function(){
  context.drawImage(spriteSheet,greenTank.animationArray[greenTank.index]* 84,0,84,84,100,100,84,84)
}


spriteSheet.addEventListener('load',()=>{
  sw = spriteSheet.width/8;
  sh = spriteSheet.height/4
  //console.log(spriteSheet.width,spriteSheet.height,sw,sh)
  //context.drawImage(spriteSheet,0,0);
  setInterval(animate,100);
});

function animate(){
  context.clearRect(0,0,width,height);
  greenTank.draw();
  greenTank.index += 1;
  if(greenTank.index >= greenTank.animationArray.length-1){
    greenTank.index = 0
  }
  console.log(greenTank.index)

}
