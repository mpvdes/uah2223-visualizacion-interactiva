let data;
let rotation;
let startSlider;
let stopSlider;
let minHappiness;
let maxHappiness;
//https://openprocessing.org/sketch/867700
function preload(){
  data = loadTable("https://docs.google.com/spreadsheets/d/e/2PACX-1vT8pBW_2Qq8mhPgJmY7Fp2mCrVQEPH5gHOOR71IrZQGFSmyABdnTZrPeG6VBewRblIOz5dbu5c-4r09/pub?gid=233656026&single=true&output=csv", 'csv', 'header')
}

function setup() {
  //noLoop();
  createCanvas(windowWidth, windowHeight);
  background('WHITE');
  angleMode(DEGREES);
  
  //create filter
  //startSlider = createSlider(1, 10,10, 1);
  //startSlider.position(20, 10);
  //startSlider.style('width', '80px');
  
  //extract important data
  rotation = 360/data.getRowCount();
  maxHappiness = max(data.getColumn('Happiness'));
  minHappiness = min(data.getColumn('Happiness'));

}

function draw(){
  
  for(let i = 0; i < data.getRowCount(); i++) {
      drawStems(data.getRow(i), i);
  }
  
  //inner circle drawing and arrow
  stroke('BLACK');
  strokeWeight(2);
  fill('WHITE');
  circle(windowWidth/2,windowHeight/2,75);
  fill('WHITE');
  arc(windowWidth/2, windowHeight/2, 35, 35, 270, 150);
  fill('WHITE');
  triangle((windowWidth/2)-20, (windowHeight/2)+10, (windowWidth/2)-13, (windowHeight/2), (windowWidth/2)-6, (windowHeight/2)+10);

  //key
  noStroke();
  rect(20, windowHeight/2 - 200, 275, 275, 4);
  fill(0);
  textSize(14)
  text('Key', 25, windowHeight/2 - 180)
  text("Leaves on left side of stem = Happy", 25, windowHeight/2 -160);
  text("Leaves on right side of stem = Sad", 25, windowHeight/2 -140);
  text("Stem color based on level of happiness:", 25, windowHeight/2 -120);
  colorMode(HSB);
  fill(color(60, 100, 100));
  circle(30, (windowHeight/2 - 100), 10)
  fill(0);
  text("Yellow = most happy = 10", 40, windowHeight/2 -100);
  colorMode(HSB);
  fill(color(222,97,97));
  circle(30, (windowHeight/2 - 80), 10)
  fill(0);
  text("Blue = most sad = 1", 40, windowHeight/2 -80);
  fill('RED');
  circle(30, (windowHeight/2 - 60), 15)
  fill(0);
  text("Not Hungry", 40, windowHeight/2 -60);
  fill('BLUE');
  circle(30, (windowHeight/2 - 40), 15)
  fill(0);
  text("Hungry", 40, windowHeight/2 -40);
  
  noFill();
  stroke('ORANGE');
  beginShape();
  vertex(40,windowHeight/2 -20);
  vertex(33,windowHeight/2 -30);
  vertex(28,windowHeight/2 -20);
  endShape();
  noStroke();
  fill('ORANGE');
  text("Checked Social Media", 40, windowHeight/2 -20);
  
  noFill();
  stroke('BLACK');
  beginShape();
  vertex(40,windowHeight/2 -10);
  vertex(33,windowHeight/2 -20);
  vertex(28,windowHeight/2 -10);
  endShape();
  noStroke();
  fill('BLACK');
  text("Did NOT Check Social Media", 40, windowHeight/2);
}

function drawStems(row,i) {
  push();
  
  //maps
  let happiness = data.getNum(i, 'Happiness');

  let radius = map(happiness, minHappiness, maxHappiness, 1, 30);

  translate(width/2, height/2);
  rotate(rotation*i);
  
  //stem color
  colorMode(HSB);
  let from = color(60, 100, 100);//yellow
  let to = color(222,97,97); //dark blue
  let lerpVal = map(happiness,minHappiness,maxHappiness,0,1);
  let stemColor = lerpColor(from,to,lerpVal);

  //draw stem
  strokeWeight(2);
  stroke(stemColor);
  let stemX = (width/2)-350;
  let stemY = (height/2)-350;
  line(0, 0, stemX, 0);
  
  //draw arrow stix  
  let socialMediaVal = data.getString(i, 'Social Media');
  let socialMediaColor;
  if(socialMediaVal == 'No'){
     socialMediaColor = 'ORANGE';
  }
  if(socialMediaVal == 'Yes'){
    socialMediaColor = 'BLACK';
  }
  noFill();
  strokeWeight(3);
  stroke(socialMediaColor);
  beginShape();
  vertex(stemX-479,stemY-440);
  vertex(stemX-472,stemY-450);
  vertex(stemX-465,stemY-440);
  endShape();
  
  //draw circle tips
  noStroke();
  let hungryVal = data.getString(i, 'Hungry?');
  let hungryColor;
  if(hungryVal == 'No'){
    hungryColor = 'RED';
  }
  if(hungryVal == 'Yes'){
    hungryColor = 'BLUE';
  }
  fill(hungryColor);
  circle(stemX,0,radius);
  
  //draw leaves
  //total leaves = total number of emails recieved
  //left side means happy(6-10), right side means sad(1-5)
  noStroke();
  let incr = -20;
  fill(stemColor);
  let numEmails = data.getNum(i,'Total Emails');
  
  if(numEmails>=1 && numEmails<=5){//right side (sad)
    for(let curr = 0; curr<numEmails; curr++){
      rightLeaf(incr);
    }
  }
  else{//left side (happy)
    for(let curr = 0; curr < numEmails; curr++){
      leftLeaf(incr);
    }
  }
  
  function rightLeaf(increment){
    triangle(((stemX-45) + incr), stemY-70, ((stemX-35) + incr), stemY-45, ((stemX-65) + incr), stemY-70);
    incr-=20;
  }
  function leftLeaf(increment){
      triangle(((stemX-65) + incr),stemY-70, ((stemX-45) + incr), stemY-70, ((stemX-45) + incr), stemY-100);
      incr-=20;
  }
  
  pop();
}
