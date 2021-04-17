 var player;
 var ground;
 var playerImage;
 var groundImage;
 var coinImage;
 var coin;
 
 function preload() {
  playerImage=loadImage("images/C 44.png") 
  groundImage=loadImage("images/garden.jfif")
  coinImage=loadImage("images/coin.png")
 }

 function setup(){
   createCanvas(1200,400)
   player=createSprite(600,360,50,50);
   player.scale=0.10
   ground=createSprite(width/2,380,width,20);
   ground.shapeColor="brown"
   player.addImage(playerImage)
   edges=createEdgeSprites()
   coin=createSprite(200,200)
   coin.addImage(coinImage)
 }
 function draw(){
   background(groundImage)
   drawSprites();
  if(keyDown(LEFT_ARROW)){
    player.velocityX=-5;
    player.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX=5;
    player.velocityY=0;
  }
  if(keyDown("space")){
    player.velocityY=-5;
  }
  player.velocityY=player.velocityY+0.8
  player.collide(ground);
  player.bounceOff(edges[0])
  player.bounceOff(edges[1])
  player.bounceOff(edges[2])
  player.bounceOff(edges[3])
 }