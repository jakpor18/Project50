var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png","girl7.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("pixelforest.jpg");
cloudImage=loadImage("cloud.png")
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  
  
  //create a ground sprite
  ground = createSprite(100,50,1000,100);
  ground.addImage(groundImage)
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.scale=0.98
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 if(ground.x<0){
  ground.x=ground.width/2
 }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
 
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
if (frameCount%60 === 0){ cloud=createSprite(600,100,40,10);
  cloud.velocityX=-3;
  cloud.addImage(cloudImage)
}


}



