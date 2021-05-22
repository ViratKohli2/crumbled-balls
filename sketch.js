
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper =new Paper(200,450,70)
    var render = Render.create({
		element:document.body,
		engine:engine,
		options:{width:1600,
		height:700}
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  
  background(230);
  Engine.update(engine)

  groundObject.display();
  dustbinObj.display();
  paper.display();
}

