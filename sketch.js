var fixedRect,movingRect,G1,G2,Gmoving;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 0, 40, 40);
  fixedRect.shapeColor = "black"
  fixedRect.velocityY = 2;
  fixedRect.debug = true;

  movingRect = createSprite(400, 400,40,40);
  movingRect.shapeColor = "black";
  movingRect.velocityY = -4;

  G1 = createSprite(100,100,20,20);
  G1.shapeColor = "black";

  G2 = createSprite(200,100,10,10);

  Gmoving = createSprite(3,24,20,20);
  Gmoving.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  

  Gmoving.x = World.mouseX;
  Gmoving.y = World.mouseY;

  bounceOff(fixedRect,movingRect);
    
  if(isTouching(G1,Gmoving)){
    G1.shapeColor = "Green";
  }
  else{
    G1.shapeColor = "black";
  }
  

  drawSprites();
}

