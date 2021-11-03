const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg, engine, world;
var snow = [];

function preload(){
backgroundImg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  Engine.update(engine);
  background(backgroundImg); 
  if(frameCount%5 ===0) {
    snow.push(new Snow(random(0,800),30,30))
  }
  for(var j=0; j<snow.length; j++){
    snow[j].display();

  }
  
  drawSprites();
}