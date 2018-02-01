// functions example
// regular setup function
function setup(){
  createCanvas(400, 300);
  background(255, 255, 255);
}
 
// regular draw function 
function draw(){
  background(255, 255, 255);
  // here we're calling a new function: drawcross
  drawCross(mouseX, mouseY);
  drawCross(50,100);
  drawCross(100,150);
  
  for(var i =0; i< 20; i++){
    // drawCross(random(width), random(height));
  }
  
}
// drawcross is a function that we have defined ourselves!
function drawCross(aX,aY){
  stroke(0, 0, 0);
  line(aX-10, aY, aX+10, aY);
  line(aX, aY-10, aX, aY+10);
}