const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// declare namespace en scope
let player,points,numberOfPoints;

points = [];

numberOfPoints = 20;
for(let i=0; i<numberOfPoints; i++){
  let point = new Point(getRandomInt(0, width),getRandomInt(0, height),getRandomInt(50, 100),"black",false,"");
  points.push(point);
}

player = new GameObject(new Vector2d(getRandomInt(0, width),getRandomInt(0, height)),new Vector2d(2,3),new Vector2d(0,0));


anime()

function anime(){
  requestAnimationFrame(anime);
  context.clearRect(0,0,width,height);
  points.map((point,i)=>{
    point.draw(context);
    checkColissions(point)
  })
  player.draw(context)
}

function checkColissions(point){
  if(player.pos.)
}