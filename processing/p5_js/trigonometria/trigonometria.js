let showCartesian = true;
let showPolar = true;

let explanation = "cos(angle) = AC (x) / AB (radius)\n" +
                  "cos(angle) / 1 = x / radius\n" + 
                  "x = cos(angle) * radius\n\n" + 
                  "sin(angle) = BC (y) / AB (radius)\n" + 
                  "sin(angle) / 1 = y / radius\n" +
                  "y = sin(angle) * radius\n\n";
                  
function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  background(255);
  if(showCartesian) drawCartesianGrid(20,20,30);
  if(showPolar) drawPolarGrid(300, 300, 30);
  stroke(0);
  // instructions
  text("press 'c' to toggle cartesian grid\n" + 
       "press 'p' to toggle polar grid\n\n" + explanation, 10, 15);
  
  stroke(0);
  
  // center
  let cx = width * 0.5;
  let cy = height * 0.5;
  // mouse
  let x = mouseX;
  let y = mouseY;
  
  // cartesian to polar conversion (e.g. x,y to angle, radius )
  let angle = atan2(y - cy, x - cx);
  let radius = dist(cx, cy, x, y);
  // polar to cartesian conversion
  let px = cos(angle) * radius;
  let py = sin(angle) * radius;
  
  // visualise triangle
  strokeWeight(3);
  line(cx, cy, x, y);
  strokeWeight(1);
  line(cx, cy, x, cx);
  line(x, cy, x, y);
  text("x = " + nfc(x, 0) + ", y = " + nfc(y, 0), x, y - 12);
  // visualise angle
  noFill();
  arc(cx, cy, radius * 0.25, radius * 0.25, angle < 0 ? angle : 0, angle < 0 ? 0 : angle);
  text("angle: " + nfc(degrees(angle),2), cx + 12, cy - 12);
  // visualise radius / hypothenuse / AB
  push();
    translate(cx, cy);
    rotate(angle);
    text("radius / AB / hypo.: " + nfc(radius, 2), radius * 0.25, -12);
  pop();
  // triangle corner labels
  text("A", cx - 12, cy);
  text("B", x + 12, y);
  text("C", x + 12, cy);
  // visualise cartesian coordinate point (offset from centre = same as x,y)
  stroke(0,192,0);
  ellipse(cx + px, cy + py, 30, 30);
}

function drawCartesianGrid(segsW, segsH, spacing){
  stroke(198);
  for(let y = 0; y < segsH; y++){
    for(let x = 0; x < segsW; x++){
      line(x * spacing, y * spacing,
           (x+1) * spacing, y * spacing);
      line(x * spacing, y * spacing,
           x * spacing, (y+1) * spacing);
    }
  }
}

function drawPolarGrid(x,y,spacing){
  let count = width / spacing;
  let cx = width * 0.5;
  let cy = height * 0.5;
  stroke(192);
  for(let i = 1 ; i <= count; i++){
    ellipse(x, y, (spacing * 2) * i);
  }
  stroke(127);
  line(cx, 0, cx, height);
  line(0, cy, width, cy);
  line(0, 0, width, height);
  line(0, height, width, 0);
}

function keyPressed(){
  if(key == 'c'){
    showCartesian = !showCartesian;
  }
  if(key == 'p'){
    showPolar = !showPolar;
  }
} 

 
