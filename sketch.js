var bullet, wall, thickness;
var speed, weight;

var damage;



function setup() {
  createCanvas(1600,400);
  
  


  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = (80,80,80);
  bullet = createSprite(50,200,20,10);
  bullet.velocityX = speed;

  thickness = random(22,83);


  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background(255,255,255); 
  
  if (bullet.isTouching(wall)) {

    bullet.velocityX = 0;

    if (damage < 10){
      bullet.shapeColor = "green";
    }
    if (damage > 10){
      bullet.shapeColor = "red";
    }


  }




  drawSprites();
}