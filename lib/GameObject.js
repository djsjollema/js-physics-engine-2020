class  GameObject {
  constructor(pos,vel,acc) {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = 10;
    this.color ="rgba(0,0,0,0.3)";
  }

  update(){
    this.vel.sumVector(this.vel,this.acc)
    this.pos.sumVector(this.pos,this.vel);
    if(this.pos.dy>height-this.radius){
      this.vel.dy = -this.vel.dy;
      this.pos.dy = height-this.radius;
    }
    if(this.pos.dy<this.radius){
      this.vel.dy = -this.vel.dy;
      this.pos.dy = this.radius;
    }
    if(this.pos.dx>width-this.radius){
      this.vel.dx = -this.vel.dx;
      this.pos.dx = width-this.radius;
    }
    if(this.pos.dx<this.radius){
      this.vel.dx = -this.vel.dx;
      this.pos.dx = this.radius;
    }

  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
  }

}
