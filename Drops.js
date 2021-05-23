class Drops{
    constructor(x,y){
        var opt={
            friction:0.01,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,5,opt);
        this.radius=5;
        World.add(world, this.rain);
    }

    dispDrop()
{
    fill("blue");
    ellipseMode(CENTRE);
    ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
}}