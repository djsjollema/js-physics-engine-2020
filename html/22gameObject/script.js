const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdrachtlet myGO;

// declare namespace en scope
// let myGO;
let GameObjects;

// assign values

//myGO = new GameObject(new Vector2d(200,200),new Vector2d(4,5),new Vector2d(0,1));
GameObjects = [];
for(let i=0;i<10;i++){
  let posX = getRandomInt(20,width-20);
  let posY = getRandomInt(20,height-120);
  let GO = new GameObject(new Vector2d(posX,posY),new Vector2d(getRandomInt(-5,5),0),new Vector2d(0,0.2));
  GameObjects.push(GO);
}
//console.log( getRandomInt(10, 100))
animate();

//animation loop
function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);
  // myGO.update();
  // myGO.draw(context);
  // myGO.vel.draw(myGO.pos.dx,myGO.pos.dy,"rgba(255,0,0,0.2)",10)
  for(let i=0; i<GameObjects.length; i++){
    GameObjects[i].update();
    GameObjects[i].draw(context);
    GameObjects[i].vel.draw(GameObjects[i].pos.dx,GameObjects[i].pos.dy,"rgba(255,0,0,0.2)",10)
  }
}
