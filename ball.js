class Ball {
    constructor(x, y) {
      var options = {
        //isStatic:false,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     /* pos.x = mouseX;
      pos.y = mouseY;*/
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      fill("red");
      ellipse(0, 0, this.width);
      pop();
      
    }
  }
  