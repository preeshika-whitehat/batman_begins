const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umberlla;
var rando;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("images 2/thunderbolt/ thunderbolt1.png");
    thunder2 = loadImage("image 2/thunderbolt/ thunderbolt2.png");
    thunder3 = loadImage("image 2/thunderbolt/ thunderbolt3.png");
    thunder4 = loadImage("image 2/thunderbolt/ thunderbolt4.png");
}


function setup(){
   createCanvas(500,700);
  
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++) {
       drops.push(new makeDrops(random(0,500), random(0,500)));
   }
}


function draw(){
    Engine.update(engine);
    background("purple");

    rando = Math.round(random(1,4));

    if(frameCount%80 === 0) {
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10,10);
        switch(rando) {
            case 1 : Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break;
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
        }
        Thunder.scale = 0.7;
     }

     if(thunderCreatedFrame + 10 === frameCount && Thunder) {
         Thunder.destroy();
     }

     umbrella.display();

     for(var i = 0; i < maxDrops; i++) {
         drops[i].display();
         drops[i].update();
 }

 drawSprites();
}   


