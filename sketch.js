const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
box1=new box(200,220,50,50)
  box2=new box(300,300,20,20)
  ground1 = new ground (200,350,400,40)
}

function draw() {
  background("blue");  
  Engine.update(engine);
  box1.display()
  box2.display()
  ground1.display()
}