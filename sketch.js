const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var drops=[];
var maxDrops=100;

function preload(){
    t1=loadImage("thunderbolt/1.png");
    t2=loadImage("thunderbolt/2.png");
    t3=loadImage("thunderbolt/3.png");
    t4=loadImage("thunderbolt/4.png");
    batImg=loadImage("Bestman-01.png");
    
}

function setup(){
var canvas = createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  umbrella=new Umbrella(200,400);
  if(frameCount%150==0){
      for(var i=0;i>maxDrops;i++){
          drops.push(new Drops(random(0,1200), random(0,400)))
      }

  }
    
}

function draw(){
    Engine.update(engine);
    background(0);
    rand=Math.round(random(1,4));
    if(frameCount%80==0){
        thunder=createSprite(random(10,1170),(10,30),10,10);
        tFrame=frameCount;
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break;
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
        }
        thunder.scale=random(0.3,0.6);
    }
    bat=createSprite(Math.round(random(0,1200)),Math.round(random(0,400)));
    bat.addImage("Bat", batImg);
}   

