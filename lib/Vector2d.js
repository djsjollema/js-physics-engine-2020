class Vector2d {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  draw(){
    let color = "blue";
    let sh = 15;
    let sw = 100;
    let hh = 20;
    let hw = 30;

    context.beginPath();
    context.fillStyle = color;
    context.moveTo(0,0);
    context.lineTo(0,sh);
    context.lineTo(sw,sh);
    context.lineTo(sw,hh);
    context.lineTo(sw + hw ,0);
    context.lineTo(sw,-hh);
    context.lineTo(sw,-sh);
    context.lineTo(0,-sh);
    context.closePath();
    context.stroke();
    context.fill();
  }
}
