
  var fix, mov; 
  function setup() {
     createCanvas(800,400); 
     fix = createSprite(200, 200, 100, 50); 
     fix.shapeColor="black"; 
     fix.debug = true;
     mov = createSprite(400, 200, 50, 100);
     mov.shapeColor="yellow"; 
     mov.debug=true; 
    } 
     function draw() {
        background(255,255,255); 
        mov.x = World.mouseX; 
        mov.y = World.mouseY; 
        console.log(mov.x);
        console.log(mov.y);

if( mov.x-fix.x < fix.width/2+mov.width/2 && mov.y - fix.y < fix.height/2+mov.height/2 &&  fix.x-mov.x < fix.width/2+mov.width/2 && fix.y - mov.y < fix.height/2+mov.height/2 ){ 
          fix.shapeColor="red"; 
          mov.shapeColor="blue";}
          else{ fix.shapeColor="black"; 
                mov.shapeColor="yellow";
         }
          drawSprites();
 }
 