//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
var Engine = Matter.Engine,
  World = Matter.World

var engine, world;
var background;
var bg;
var snowImg;




function preload(){
bg= loadImage("snow3.jpg")
snowImg = loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
   //engine = Engine.create();
 // world = engine.world;
  background = createSprite(700,100);
  background.addImage(bg)
  
 
  
}

function draw() {
 
     snowFlakes();
  drawSprites();
}

function snowFlakes(){
  if (World.frameCount % 50 == 0) {
    var snow = createSprite(Math.round(random(800, 400),40, 10, 10));
    snow.addImage(snowImg)
    snow.scale = 0.1
    snow.velocityY = 3;
  }
}