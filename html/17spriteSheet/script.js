const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace
let runningCat,sw,sh,sx,sy,x,y,w,h,index;
let xspeed;


runningCat = new Image()
runningCat.src = "images/runningcat.png";
index = 0;
xspeed = 20;

runningCat.addEventListener('load',()=>{
  sw = runningCat.width/2;
  sh = runningCat.height/4;
  x = 100;
  y = 100;

  setInterval(animate,1000)
})

function animate(){
  sx = index%2 * sw;
  sy = Math.floor(index/2) * sh;

  w = sw;
  h = sh;

  console.log(index,x);
  context.clearRect(0,0,width,height)
  context.drawImage(runningCat,sx,sy,sw,sh,x,y,w,h)
  //context.drawImage(runningCat,0,0);
  index++;
  if(index>7){
    index = 0 ;
  }
  x += xspeed;
  if(x>width){
    x = -sw
  }

}
