var bg, boxObject;

function preload(){
  bg = loadImage("images/bg.jpg");
}

function setup(){
  createCanvas(700, 400);

  boxObject = createSprite(360, 300, 100, 50);
  boxObject.shapeColor = "purple";
  

}


function draw(){
  background(bg);

  if(touches.length > 0){
    boxObject.position.x = random(0, 700);
    boxObject.position.y = random(0, 400);
  }

  drawSprites();
}