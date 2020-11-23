var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   

	

	car.shapeColor=color(255);


  
  	wall=createSprite(1300,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(keyDown("space")){
	car.velocityX = speed;
  }

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
    car.shapeColor=color(255,0,0);
    stroke  ("green");
    textSize(20)
    text("U ARE IN DANGER",600,200);

    stroke  ("green");
    textSize(20)
    text("WALL IS NOT GOOD",600,240);
	}

	if(deformation<180 && deformation>100)
	{
    car.shapeColor=color(230,230,0);
    stroke  ("green");
    textSize(20)
    text("THIS WALL IS OK....... ",600,200);

    stroke  ("green");
    textSize(20)
    text("WALL IS AVERAGE",600,240);
	}

	if(deformation<100)
	{
    car.shapeColor=color(0,255,0);
    stroke  ("green");
    textSize(20)
    text("U ALL ARE PROTECTED",600,200);

    stroke  ("green");
    textSize(20)
    text("WALL IS GOOD",600,240);
	}
  }  
  
  drawSprites();
 
}