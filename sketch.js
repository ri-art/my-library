  var obj1, obj2,obj3,obj4; 
  
  function setup() { 

    createCanvas(1200,800); 
    obj1 = createSprite(600, 400, 50, 80); 
    obj1.shapeColor = "pink"; 
    obj1.debug = true;
    obj2 =createSprite(400,200,80,30); 
    obj2.shapeColor = "black"; 
    obj2.debug = true; 
    obj3 = createSprite(200,300,20,50);
    obj3.shapeColor = "green";
    obj4 = createSprite(200,100,20,50);
    obj4.shapeColor = "orange";

    //assinging velocity
    obj3.velocityY = 0;
    obj4.velocityY =  5;


  } 

    function draw() {

      background("white"); 
      obj1.x = World.mouseX;
      obj1.y = World.mouseY;

      if(isTouching(obj1, obj2)){

        obj1.shapeColor = "red";
        obj2.shapeColor = "blue";

      }

      else

      {

        obj1.shapeColor = "pink";
        obj2.shapeColor = "black";
      }
      bounceoff(obj3,obj4); 

  drawSprites(); 

 }

 