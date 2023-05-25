//https://coolors.co/39375b-ed217c-87c38f-ffffff
let size ;
function setup() {
  createCanvas(windowWidth, windowWidth);

  size= windowWidth / 2;
  
}
function draw() {
  background("#39375B");
  
  //OPACIDAD
  ellipsec= color("#ed217c");
  ellipsec.setAlpha(20 );
 // ellipsec.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(ellipsec);
  ellipse(width/2, height/2, size, size);
  fill(255);
  ellipse(width/2, height/2, size/5, size/5);
}
function windowResized() {
     if(windowWidth < 550) {
        size = 100;
    } else {
        size = 200;
    }
  resizeCanvas(windowWidth, windowHeight);
}
