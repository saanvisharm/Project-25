const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rightDustbin, leftDustbin, bottomDustbin, paperObject,groundObject	
var world,img;

function preload(){
	img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	bottomDustbin = new dustbin(1200, 650, 200, 20);
	leftDustbin = new dustbin(1100, 550, 20, 200);
	rightDustbin = new dustbin(1300, 550, 20, 200);
	paperObject = new paper(200,450,40);
	groundObject = new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
 
	paperObject.display();
	bottomDustbin.display();
	leftDustbin.display();
	rightDustbin.display();
	groundObject.display();

  imageMode(CENTER);
  image(img, 1200, 550, 200, 200);
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-90});
	  	}
}