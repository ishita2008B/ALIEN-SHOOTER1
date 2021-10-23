
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_image,Alien,spaceShip;
var world;


function preload(){

  bg_image = loadImage("—Pngtree— star space transparency background_5439546.png")
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);

 spaceShip = createImg('pinpng.com-spaceship-png-587670.png');
 spaceShip.position(500,400);
 spaceShip.size (200,200);
 

  
 //Alien = new alien(100,100,50,100);
 

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(bg_image);
  Engine.update(engine);

  //Alien.display();


 // drawSprites()
  
}

