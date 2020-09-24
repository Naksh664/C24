
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , groung , dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	cpball = new Ball(50,30,30)
	ground = new Ground(20)
	dustbin = new Bin(800,360)  

	Engine.run(engine);
}


function draw() {
  background(0);
  cpball.display();
  ground.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Body.applyForce(cpball.body,cpball.body.position,{x:-85,y:-85})
}	
}



