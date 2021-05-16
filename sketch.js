var boyi,boy,sn,sni,bau,baui,boy1,boyy,sn1,snii,sf,sfi;

function preload(){
bg=loadImage("snow1.jpg")
boyi=loadImage("boy.png")
sni=loadImage("mannnnnn.png")
snii=loadImage("man1.png")
baui=loadImage("boyy.png")
boyy=loadImage("mr.png")
sfi=loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400);
   boy=createSprite(400, 200, 50, 50);
   boy.addImage(boyy)
   boy.scale=0.25
   sn=createSprite(100, 300, 50, 50);
   sn.addImage(sni)
   sn.scale=0.4
   sn1=createSprite(700, 300, 50, 50);
   sn1.addImage(snii)
   sn1.scale=0.1  
   bau=createSprite(600, 200, 50, 50);
   bau.addImage(baui)
   bau.scale=0.2
   boy1=createSprite(500, 300, 50, 50);
   boy1.addImage(boyi)
   boy1.scale=0.1
}

function draw() {
  background(bg);
  if(boy.y<150)  {
    boy.velocityY=0
    boy.y=200
  }

  else{boy.velocityY=-2}
  if(bau.y<150)  {
    bau.velocityY=0
    bau.y=200
  }

  else{bau.velocityY=-2}
  if(boy1.y<250)  {
    boy1.velocityY=0
    boy1.y=300
  }

  else{boy1.velocityY=-2}
  flekiprahanta()
  drawSprites();
}
function flekiprahanta(){
  if(frameCount%25===0){
    sf=createSprite(random(0,800),10,20,20)
    sf.addImage(sfi)
    sf.velocityY=3
    sf.scale=0.1
  }
}