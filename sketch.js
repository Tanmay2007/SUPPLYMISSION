var Bullet , wall , speed ,weight;
var thickness,damage;
function setup() {
 
 
  speed=random(223,321)
  weight=random(30,52)
thickness=random(22,83)

 Bullet = createSprite(200, 200, 30, 10);
 Bullet.shapeColor=color("white")

 wall = createSprite(1200,200,thickness,canvas.height/2) 
 wall.shapeColor=color(80,80,80)
 Bullet.depth=wall.depth+2;
}

function draw() {
  createCanvas(1600,400)
  background("black")
  
      Bullet.velocityX=speed;
    Bullet.weight=weight;
  
if (hasCollided(Bullet,wall)){
      Bullet.velocityX=0;
      damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10){
  wall.shapeColor=color (255,0,0)
}

if (damage<10){
  wall.shapeColor=color (0,255,0)
}

}

 drawSprites();
}

function hasCollided(Bullet,wall){
BulletRightEdge=Bullet.x+Bullet.width;
wallLeftEdge=wall.x;
if (BulletRightEdge>wallLeftEdge){
  return true;
}
return false;
}

