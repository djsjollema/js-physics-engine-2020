/*
	4-3-2020
	klasse om punten op polygonen mee vast te leggen en te tekenen

	eigenschappen
	* points (array van points)

  methodes
  * draw
*/


class Poygon{
  constructor(points){
    this.points = points;
  }

  addPoint(point){
    this.points.push(point);
  }

  draw(context){
    for(let i = 0; i<this.points.length;i++){
      points[i].draw(context);
      points[i].printText(context);
    }
    context.beginPath();
    context.moveTo(points[0].x,points[0].y);
    for(let i = 0; i<this.points.length;i++){
      context.lineTo(points[i].x,points[i].y);
    }
    context.closePath();
    context.stroke();
  }
}
