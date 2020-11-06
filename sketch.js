
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var score=0
var survivalTime=0
                        
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

 ground=createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  
 FoodGroup = new Group;
 obstacleGroup = new Group; 
  
}


function draw() {
   background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival time: "+ survivalTime,100,50);

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -11;  
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);

  drawSprites();
  
  obstacles();
    
  food();
}
function obstacles(){
  if(frameCount % 300 === 0) {
  obstacle = createSprite(380,326,40,10);

  obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    
   obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
  }
function food() {
  if (frameCount % 80 === 0) {
     banana = createSprite(400,315,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.velocityX = -3;
    
  
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  
    FoodGroup.add(banana);
  }
  
}








