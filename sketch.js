var boy,computer,kiteR,kiteG,thread;
var swingX,swingY;
var swingX1,swingY1;
var heart,kite,kite1;
var boy1,robot;
var cloud ,cloud1;
var Plife=[];
var Clife=[];
function preload(){
 boy1=loadImage("animations/boy.png");
 heart=loadImage("animations/heart.png");
 kite=loadImage("animations/red kite.png");
 kite1=loadImage("animations/green kite.png");
 robot=loadImage("animations/robot.jpg");
 cloud1=loadImage("animations/cloud.png");
}
function setup() {
  createCanvas(1500,500);
  swingX=0;
  swingY=0;

  swingX1=0;
  swingY1=0;

  kiteR=createSprite(400, 200, 50, 30);
  kiteR.scale=0.4;
  kiteR.addImage(kite);
   cloud=createSprite(0,100);
   cloud.velocityX=3;
   cloud.addImage(cloud1);
  kiteG=createSprite(800, 200, 50, 30);
  kiteG.scale=0.4;
  kiteG.addImage(kite1);
  boy=createSprite(300,400,30,20);
  boy.addImage(boy1);
  boy.scale=0.3;

  computer=createSprite(900,400,30,20);
  computer.addImage(robot);
  computer.scale=0.3;
  for(var i=0;i<5;i++){
    Plife[i]=createSprite(100+40*i,450,10,10);
    Clife[i]=createSprite(1100+40*i,450,10,10);
    Plife[i].scale=0.1;
    Clife[i].scale=0.1;
    Plife[i].addImage( heart);
    Clife[i].addImage( heart);
  }


}

function draw() {
  background(255);  
 
  swingX = sin(frameCount/50)*100;
  swingY = cos(frameCount/25)*10;
  
  line(boy.x,boy.y, mouseX + swingX, mouseY + swingY);
  //kiteR(mouseX + swingX, mouseY+ swingY, 30,30);
  kiteR.x=mouseX+swingX;
  kiteR.y=mouseY+swingY;
     if (frameCount>250){
      cloud=createSprite(0,100);
      cloud.velocityX=3;
      cloud.addImage(cloud1);
     
     }


  swingX1 = sin(frameCount/50)*10000;
  swingY1 = cos(frameCount/25)*10;
  
  line(computer.x,computer.y, 200 + swingX1, swingY1);
 // ellipse(mouseX + swingX, 300 + swingY, 30,30);
 // kiteR
 if(kiteG.x>670){
  kiteG.x=kiteG.x-10;
}
else{
  kiteG.x=200+swingX1;
}
 
 kiteG.y=swingY1;
 
///console.log(200+swingX1,swingY1) ;
  drawSprites();
}
