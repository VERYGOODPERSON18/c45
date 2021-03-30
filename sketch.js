

var engine, world;
var samurai1,samurai2;
var ninja1,ninja2;
var ground;

function preload(){
    //groundimg=loadImage("")
}

function setup(){
    var canvas = createCanvas(1600,800);
 
    //the creation of ground
    ground=createSprite(800,780,1600,20);

    //creating ninja
    ninja = createSprite(40,740,20,60);

   
  
}

function draw(){
    background("brown");

    if(keyDown("space")){
        ninja.velocityY=-5;
        
    }
    ninja.velocityY=ninja.velocityY+0.8;
    ninja.collide(ground);
    spawnObstacles();

    drawSprites();
   
   
}

    function spawnObstacles() {
        if(frameCount % 60 === 0) {
          var samurai1 = createSprite(600,40,10,40);
          samurai1.velocityX = -6;
          samurai1.y = Math.round(random(50,700));
          samurai1.scale = 1;
          samurai1.lifetime = 300;
        }
    }

