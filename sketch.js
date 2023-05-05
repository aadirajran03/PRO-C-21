var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600,10);
	ground = new Ground(400,600,800,20);
    leftSide = new Dustbin(670,620,20,100);
	rightSide = new Dustbin(670,640,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Bodies.applyForce(paper.body, paper.body.position,[x: 15, y:-15])
	}
}



