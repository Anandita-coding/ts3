class Box {
    constructor(x, y, width, height) {
      var options = {
          density : 0.1,
          restitution:0.2,
          friction:0,
          isStatic:false
      }
      this.Visibility = 255 
      this.body = Bodies.rectangle(x, y, width, 50, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      console.log(this.body.speed)
     
      if(this.body.speed<3){
        var angle = this.body.angle;
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill ("pink")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world,this.body)
        push ()
        this.Visibility = this.Visibility-10
        pop ()
      }
    
   }
   score(){
     if (this.visibility<0 && this.visibility>-105) {
       score++;
     }

   }
  };
  