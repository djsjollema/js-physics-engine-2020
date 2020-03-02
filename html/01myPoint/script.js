const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myCircle = new Point(500,200,50,"yellow");
myCircle.draw();

let myOtherCircle = new Point(200,100,100,"blue")
myOtherCircle.draw()
