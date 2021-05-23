class Umbrella{
    constructor(x,y){
        var opt={
            isStatic:true
        }
        this.umbrella=Bodies.circle(x,y,50,opt);
        this.radius=50;
        this.image=loadImage("Walking Frame/walking_1.png")
        World.add(world, this.umbrella);
        this.batmanImg=loadImage("Bestman-01.png");
    }

    display(){
        imageMode(CENTRE);
        image(this.batmanImg, this.umbrella.position.x, this.umbrella.position.y, 150, 230);
    }
}