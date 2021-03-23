
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball1,ball2,ball3,ball4;
var ground1, chain1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(40,30,30,30);
	ground1 = new Ground(40,50,900,15);
	ball2 = new Boxes(40,30,30,30)
	chain1 = new Chain(ball1.body,ground1.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  ball1.display();
  ground1.display();
  chain1.display();
 
}



