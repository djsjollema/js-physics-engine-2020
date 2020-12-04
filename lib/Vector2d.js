class Vector2d {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  get magnitude(){
    let a = this.dx;
    let b = this.dy
    return Math.sqrt(a*a + b*b);
  }

  draw(x,y){
    let color = "blue";
    let sh = 7;
    let sw = 100;
    let hh = 20;
    let hw = 30;

    context.save();
    context.beginPath();
    context.fillStyle = color;

    //translate to position x,y
    context.translate(x,y);

    //draw arrow
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
    context.restore();
  }
}
