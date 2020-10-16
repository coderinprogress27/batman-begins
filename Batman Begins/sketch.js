const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var batman;
var maxDrops = 100;
var rain = [];
var rand;

function preload(){
    }

function setup(){
   createCanvas(500, 1000);
   engine = Engine.create();
   world = engine.world;

   batman = new Umbrella(250, 600);

   for(var i=0; i<maxDrops; i++){
    rain.push(new Drop(random(0,400), random(0,400)));
    
}
  
}

function draw(){
    background("black");
    Engine.update(engine);
    
    for(var i=0; i<maxDrops; i++){
        rain[i].display();
        rain[i].update();
        
    }

    
    batman.display();
    
    drawSprites();
    
}   

