var path,boy,cash,diamonds,jwellery,sword;
var treasureCollection = 0;
var b1,b2,b3,i1;


var PLAY=1;
var END=0;
var gameState=1;


function setup(){
  

 createCanvas(windowWidth,windowHeight);




path=createSprite(width/2,200);
path.velocityY = 4;


boy = createSprite(width/2,height-20,20,20);
boy.scale=8;
  
  
b1=new Group();
b2=new Group();
b3=new Group();
i1=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  


   if(path.y > height ){
     path.y = height/2;
   }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (b1.isTouching(boy)) {
      b1.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (b2.isTouching(boy)) {
      b2.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(b3.isTouching(boy)) {
      b3.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(i1.isTouching(boy)) {
        gameState=END;
        

        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        b1.destroyEach();
        b2.destroyEach();
        b3.destroyEach();
        i1.destroyEach();
        
        b1.setVelocityYEach(0);
        b2.setVelocityYEach(0);
        b3.setVelocityYEach(0);
        i1.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  b1.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  b2.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  b3.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.scale=0.1;
  sword.velocityY = 4;
  sword.lifetime = 200;
  i1.add(sword);
  }
}