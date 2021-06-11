
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var play;
var gameState ;

function preload() {
  playbutton = loadImage("Play.png");
  face = loadImage("Face.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 114);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  play = createSprite(1300, 360, 30, 30);
  play.addImage(playbutton);
  play.scale = 0.06;






  ball = new Ball(1300, -10, 40);

  //slab = new Slab(600,300,300,20);
  slab2 = new Slab(10, 400, 20, 900);
  slab3 = new Slab(1000, 740, 2000, 20);
  slab4 = new Slab(1528, 500, 20, 1000);
  slab5 = new Slab(700, 10, 1700, 20);
  slab6 = new Slab(650, 600, 100, 50);
  slab7 = new Slab(600, 550, 100, 50);
  slab8 = new Slab(550, 500, 100, 50);
  slab9 = new Slab(500, 450, 100, 50);
  slab10 = new Slab(450, 400, 100, 50);
  slab11 = new Slab(400, 350, 100, 50);
  slab12 = new Slab(650, 678, 100, 102);
  slab13 = new Slab(339, 275, 20, 200);
  slab14 = new Slab(280, 365, 100, 20);
  slab15 = new Slab(240, 350, 20, 50);
  slab16 = new Slab(1200, 350, 20, 50);
  slab17 = new Slab(1300, 350, 50, 50);
  slab18 = new Slab(1400, 350, 20, 50);

  //slab19 = new Slab(290, 350, 80, -PI / 7)
  //slab20 = new Slab(290, 345, 80, -PI / 7)
  //slab21 = new Slab(290, 340, 80, -PI / 7)
  //slab22 = new Slab(290, 335, 80, -PI / 7)
  //slab23 = new Slab(290, 330, 80, -PI / 7)
  //slab24 = new Slab(290, 325, 80, -PI / 7)
  //slab25 = new Slab(290, 320, 80, -PI / 7)
  //slab26 = new Slab(290, 315, 80, -PI / 7)
  //slab27 = new Slab(290, 310, 80, -PI / 7)
  //slab28 = new Slab(290, 305, 80, -PI / 7)
  //slab29 = new Slab( 290, 300, 80, -PI / 7)
  //slab30 = new Slab(290, 295, 80, -PI / 7)
  //slab31 = new Slab(290, 290, 80, -PI / 7)
  //slab32 = new Slab(290, 285, 80, -PI / 7)








}



function draw() {
  rectMode(CENTER);
  background("White");
  Engine.update(engine);



  ball.display();
  //slab.display();
  slab2.display();
  slab3.display();
  slab4.display();
  slab5.display();
  slab6.display();
  slab7.display();
  slab8.display();
  slab9.display();
  slab10.display();
  slab11.display();
  //slab12.display();
  slab13.display();
  slab14.display();
  slab15.display();
  slab16.display();
  slab17.display();
  slab18.display();

  //slab19.display();
  //slab20.display();
  //slab21.display();
  //slab22.display();
  //slab23.display();
  //slab24.display();
  //slab25.display();
  //slab26.display();
  //slab27.display();
  //slab28.display();
  //slab29.display();
  //slab30.display();
  //slab31.display();
  //slab32.display();

  fill("Grey");
  textSize(25);
  text("Press Play Button To Play!", 620, 90);

  fill("Grey");
  textSize(15);
  text("THIS GAME IS STILL UNDER DEVELOPMENT!", 600, 120);

  fill("Blue");
  textSize(15);
  text("AIM: Get The Ball In The Box", 660, 140);

  fill("Blue");
  textSize(25);
  text("BY: Akshat Malik", 1200, 120);

  fill("Blue")
  textSize(40);
  text("👇", 260, 250)

  fill("Blue")
  textSize(25);
  text(":", 285, 300)

  fill("Blue")
  textSize(25);
  text("\\/", 281, 320)

  fill("Red");
  textSize(15);
  text("Use Arrow Keys To Play!", 670, 160);

  fill("Tan");
  textSize(35);
  text("WELCOME TO JUMP BOX! ", 550, 60);

  if (mousePressedOver(play)) {
    Matter.Body.setStatic(ball.body, false);

  }

  if (Matter.SAT.collides(ball.body, slab14.body).collided) {
    gameState ="level2";
  }

  if(gameState == "level2"){
    background("black");
    fill("red");
    textSize(50);
    text("Level 2", displayWidth/2,displayHeight/2);
    play.visible =false;
  }

  


  drawSprites();
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, { x: 0, y: -25 });
    text.hide()
  }
  if (keyCode === DOWN_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 0, y: 25 }); }
  if (keyCode === LEFT_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: -25, y: 0 }); }
  if (keyCode === RIGHT_ARROW) { Matter.Body.applyForce(ball.body, ball.body.position, { x: 25, y: 0 }); }
}














