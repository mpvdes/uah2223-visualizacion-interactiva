//http://www.paywizard.org/main/salary/minimum-wage

String [] state = {"Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delware", "FLorida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas"};
float [] wage = {0.0, 9.80, 10.00, 8.50, 10.50, 9.30, 10, 10, 8.25, 8.10, 5.15, 9.25, 7.25, 8.25, 7.25, 7.25, 7.25};

PVector [] loc = new PVector[state.length];
PVector [] cycle = new PVector [state.length];

int wageScale = 12;
int radius = 150;

void setup () {
  size(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  for (int i = 0; i < state.length; i++) {

    loc[i] = new PVector(width/2, height/2);
    cycle[i] = new PVector(0, 0 );

    cycle[i].x = sin(radians(i*(360/state.length)));
    cycle[i].y = cos(radians(i*(360/state.length)));
  }
}

void draw () {
  background(360);

  //border
  for (int i = 0; i < 4; i++) {
    pushMatrix();
    translate(width/2, height/2);
    rotate(radians(i*90));
    strokeWeight(10);
    stroke(150, 80, 80, 20);
    line(-width/2+50, -height/2+50, width/2-50, -height/2+50);
    strokeWeight(5);
    stroke(200, 80, 80, 20);
    line(-width/2, -height/2+25, width/2, -height/2+25);
    popMatrix();
  }

  //location
  pushMatrix();
  translate(loc[0].x, loc[0].y+5);

  //graph
  stroke(180, 80, 80);
  fill(180, 80, 80);
  beginShape();
  for (int i = 0; i < state.length; i++) {
    vertex((wage[i]*wageScale)*cycle[i].x, (wage[i]*wageScale)*cycle[i].y);
  }
  endShape(CLOSE);

  for (int i = 0; i < state.length; i++) {
    //graph: dividing lines
    pushMatrix();
    strokeWeight(1);
    stroke(30, 50, 80);
    line((wage[i]*wageScale)*cycle[i].x, (wage[i]*wageScale)*cycle[i].y, radius*cycle[i].x, radius*cycle[i].y);    
    popMatrix();
    
    pushMatrix();
    strokeWeight(1);
    stroke(360,70);
    line(0, 0, (wage[i]*wageScale)*cycle[i].x, (wage[i]*wageScale)*cycle[i].y);    
    popMatrix();
    
    pushMatrix();
    translate((radius+5)*cycle[i].x, (radius+5)*cycle[i].y);
    rotate(radians(180)-radians(i*(360/state.length)));
    strokeWeight(1);
    stroke(30, 50, 80);
    fill(360);
    arc(0, 0, 30, 30, 0, PI, OPEN);
    popMatrix();

    //text: states
    pushMatrix();
    translate(radius*cycle[i].x, radius*cycle[i].y);
    noStroke();
    fill(0);
    if ((radius*cycle[i].x+loc[i].x) < width/2) {
      rotate(radians(270)-radians(i*(360/state.length)));
      textAlign(RIGHT);
    } else {
      rotate(radians(90)-radians(i*(360/state.length)));
      textAlign(LEFT);
    }
    textSize(12);
    text(state[i], 0, 4);
    popMatrix();
  }
  popMatrix();
  
  //title
  noStroke();
  fill(170, 50, 50);
  textAlign(CENTER);
  textSize(20);
  text("Minimum Wage Per State", width/2.5, height/6.5);
  
  //color represents...
  noStroke();
  fill(180, 80, 80);
  rect(width/1.6-10, height/1.15-10, 10, 10);
  
  noStroke();
  fill(170, 50, 50);
  textAlign(LEFT);
  textSize(12);
  text("Minimum Wage Amount", width/1.6 + 8, height/1.15);
}//http://www.paywizard.org/main/salary/minimum-wage

String [] state = {"Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delware", "FLorida", "Georgia", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas"};
float [] wage = {0.0, 9.80, 10.00, 8.50, 10.50, 9.30, 10, 10, 8.25, 8.10, 5.15, 9.25, 7.25, 8.25, 7.25, 7.25, 7.25};

PVector [] loc = new PVector[state.length];
PVector [] cycle = new PVector [state.length];

int wageScale = 12;
int radius = 150;

void setup () {
  size(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  for (int i = 0; i < state.length; i++) {

    loc[i] = new PVector(width/2, height/2);
    cycle[i] = new PVector(0, 0 );

    cycle[i].x = sin(radians(i*(360/state.length)));
    cycle[i].y = cos(radians(i*(360/state.length)));
  }
}

void draw () {
  background(360);

  //border
  for (int i = 0; i < 4; i++) {
    pushMatrix();
    translate(width/2, height/2);
    rotate(radians(i*90));
    strokeWeight(10);
    stroke(150, 80, 80, 20);
    line(-width/2+50, -height/2+50, width/2-50, -height/2+50);
    strokeWeight(5);
    stroke(200, 80, 80, 20);
    line(-width/2, -height/2+25, width/2, -height/2+25);
    popMatrix();
  }

  //location
  pushMatrix();
  translate(loc[0].x, loc[0].y+5);

  //graph
  stroke(180, 80, 80);
  fill(180, 80, 80);
  beginShape();
  for (int i = 0; i < state.length; i++) {
    vertex((wage[i]*wageScale)*cycle[i].x, (wage[i]*wageScale)*cycle[i].y);
  }
  endShape(CLOSE);

  for (int i = 0; i < state.length; i++) {
    //graph: dividing lines
    pushMatrix();
    strokeWeight(1);
    stroke(30, 50, 80);
    line((wage[i]*wageScale)*cycle[i].x, (wage[i]*wageScale)*cycle[i].y, radius*cycle[i].x, radius*cycle[i].y);    
    popMatrix();
    
    pushMatrix();
    strokeWeight(1);
    stroke(360,70);
    line(0, 0, (wage[i]*wageScale)*cycle[i].x, (wage[i]*wageScale)*cycle[i].y);    
    popMatrix();
    
    pushMatrix();
    translate((radius+5)*cycle[i].x, (radius+5)*cycle[i].y);
    rotate(radians(180)-radians(i*(360/state.length)));
    strokeWeight(1);
    stroke(30, 50, 80);
    fill(360);
    arc(0, 0, 30, 30, 0, PI, OPEN);
    popMatrix();

    //text: states
    pushMatrix();
    translate(radius*cycle[i].x, radius*cycle[i].y);
    noStroke();
    fill(0);
    if ((radius*cycle[i].x+loc[i].x) < width/2) {
      rotate(radians(270)-radians(i*(360/state.length)));
      textAlign(RIGHT);
    } else {
      rotate(radians(90)-radians(i*(360/state.length)));
      textAlign(LEFT);
    }
    textSize(12);
    text(state[i], 0, 4);
    popMatrix();
  }
  popMatrix();
  
  //title
  noStroke();
  fill(170, 50, 50);
  textAlign(CENTER);
  textSize(20);
  text("Minimum Wage Per State", width/2.5, height/6.5);
  
  //color represents...
  noStroke();
  fill(180, 80, 80);
  rect(width/1.6-10, height/1.15-10, 10, 10);
  
  noStroke();
  fill(170, 50, 50);
  textAlign(LEFT);
  textSize(12);
  text("Minimum Wage Amount", width/1.6 + 8, height/1.15);
}
