var car,wall;
var speed,height,weight;
var deformation;

function setup() {
  speed = random(55,90);
  weight = random(1000,3000);
  height = 400;
  createCanvas(1600,height);
  createSprite(400, 200, 50, 50);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80)
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    deformation = (0.5 * weight * speed* speed)/22509;
    
    if(deformation>180) {
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)  {
      car.shapeColor = (230,230,0);
    }

    if(deformation>100) {
      car.shapeColor = (0,255,0);
    }
  } 
  drawSprites();
}