/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {

  constructor(x,y,radius,color,draggable){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draggable = false || draggable;
    if(this.draggable) this.drag();
    }

    drag(){
      //
    }

    drag(){
      let distance = 1000;
      let dragging = false

      addEventListener('mousedown',mouseDownHolder);
      function mouseDownHolder(evt){
        let dx = evt.clientX - this.x;
        let dy = evt.clientY - this.y
        distance = Math.sqrt(dx*dx + dy * dy);
        if(distance<this.radius){
          dragging = true
        }
      }

      addEventListener('mousemove',mouseMoveHolder);
      function mouseMoveHolder(evt){
        //console.log('move')
      }
      addEventListener('mouseup',mouseUpHolder);
      function mouseUpHolder(evt){
        //console.log('up')
      }
    }
    // this.font = "12px Courier new";
    // this.text = text;


  draw(){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
  }

  printText(){
    context.font = this.font;
    context.fillText(this.text, this.x, this.y - this.radius - 10);
  }

}
