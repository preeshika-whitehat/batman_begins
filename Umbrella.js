class Umbrella {
    constructor(x,y) {
        var options = {
             'isStatic': true,
        }
    this.body = Bodies.circle(x, y, 50,options);
    this.radius = 50;
    this.image = loadImage("images 2/Walking Frame/walking_1.png", "images 2/Walking Frame/walking_2.png", "images 2/Walking Frame/walking_3.png", "images 2/Walking Frame/walking_4.png", "images 2/Walking Frame/walking_5.png", "images 2/Walking Frame/walking_6.png","images 2/Walking Frame/walking_7.png", "images 2/Walking Frame/walking_8.png");
    World.add(world, this.body);
    }

    display() {
   var pos = this.body.position;
   imageMode(CENTER);
   image(this.image, pos.x, pos.y +70,300,300);

    }
}