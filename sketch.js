var bgImg;
var cat;







function preload() {
    bgImg= loadImage("garden.png"); 
catimg1= loadAnimation("cat1.png");
mouseimg1= loadAnimation("mouse1.png");

catimg2= loadAnimation ("cat2.png && cat3.png"); 
mouseimg2= loadAnimation("mouse2.png && cat3.png"); 





}

function setup(){
    createCanvas(1000,800);
    

}

function draw() {

    background("bgImg"); 
    keyPressed();

    if(cat.x-mouse.x< (cat.width-mouse.width)/2){
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
    

    
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){

        mouse.addAnimation ("mouseTeasing", mouseing2);
         mouse.changeAnimation ("mouseTeasing");
        mouse.frameDelay = 25;
         }
        
    if(keyCode === LEFT_ARROW){ 

            mouse.addAnimation ("mouseTeasing", mouseing2);
            mouse.changeAnimation ("mouseTeasing");
           mouse.frameDelay = 25
        }

        if(keyCode === UP_ARROW){
            mouse.addAnimation ("mouseTeasing", mouseing2);
         mouse.changeAnimation ("mouseTeasing");
        mouse.frameDelay = 25
        }

       if(keyCode === DOWN_ARROW){
        mouse.addAnimation ("mouseTeasing", mouseing2);
        mouse.changeAnimation ("mouseTeasing");
       mouse.frameDelay = 25
       }



  


}
