/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y; //declaramos variables posicion



function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
  background(200,100,2);
}

function draw() {
  
  
  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-5, 5);
  // Moving up at a constant speed
  y = y - 0.5;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}
