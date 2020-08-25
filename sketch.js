var car,wall;
var speed,weight;
var deformation;

function setup() {
createCanvas(1600,400);
speed = random(55,90);
weight = random(400,1500);
car = createSprite(50,200,30,10);
wall = createSprite(1500,200,60,200/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
background(0,100,0);
drawSprites();
car.velocityX = speed;
if(wall.width/2+car.width/2>car.x-wall.x && wall.width/2+car.width/2>wall.x-car.x && wall.width/2+car.width/2>car.y-wall.y && wall.width/2+car.width/2>car.y-wall.y){

deformation = (0.5*weight*speed)/22500
car.velocityX = 0;
}

if(deformation<100){

car.shapeColor = (0,255,0);

}

if(deformation >100&& deformation <180){

car.shapeColor = (230,230,0);

}

if(deformation>180){

car.shapeColor = (255,0,0);

}
}