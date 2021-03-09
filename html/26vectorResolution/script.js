const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdrachtlet myGO;

// declare namespace en scope

animate();


function animate(){
  context.clearRect(0,0,width,height)
  requestAnimationFrame(animate);


}
