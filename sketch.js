var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3;


function setup() {
  createCanvas(1200,800);

  fixedrect = createSprite(600, 400, 50, 50);
  fixedrect.shapeColor = "Purple";

  movingrect = createSprite(400,200,80,40);
  movingrect.shapeColor = "purple";

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "orange";

  gameobject2 = createSprite(200,500,50,50);
  gameobject2.shapeColor = "cyan";

  gameobject3 = createSprite(300,200,50,50);
  gameobject3.shapeColor = "yellow";

}

function draw() {
  background("black"); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

 if(isTouching(movingrect,gameobject3))
 {
  movingrect.shapeColor = "red";
  gameobject3.shapeColor = "red";
 }
 else
 {
  movingrect.shapeColor = "green";
  gameobject3.shapeColor = "green";
 
}

  drawSprites();
}

function isTouching(object1,object2)
{

 //creating Algorithm for collision detecion 
 if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
  object2.x - object1.x < object2.width/2 + object1.width/2 &&
  object1.y - object2.y < object2.height/2 + object1.height/2 &&
  object2.y - object1.y < object2.height/2 + object1.height/2)
  
{

  return true;
}

else
{   

return false;

}

}