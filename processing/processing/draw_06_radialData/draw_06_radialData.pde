import processing.opengl.*;

/*
12/12/12 
 David Dalmazzo
 code for Iaac class
 */

PFont myFont;

int num = 10;
float randomNumbers[] = new float[num]; //random numbers simulating data
float number = 0.0;
float theValue = 0;
float pointSize = 5;
float myRadio = 73;
float maximum = 450;
float first_x, first_y;

void setup() {
  size (1080, 1920);
  smooth();
  myFont = loadFont("AndaleMono-48.vlw");
  textFont(myFont, 48);
  textAlign(CENTER);
  for (int i = 0; i <num; i++) {
    number += 0.1;
    float n = noise(number)*maximum;//this is a perlin noise
    randomNumbers[i] = n;
    println(n);
  }
}

void draw() {
  background(0);
  dataReference(width/2, height/2, maximum);
  drawDataArea(width/2, height/2);
  drawText(width/2, height/2);
}


void drawDataArea (float origin_x, float origin_y) {
  pushMatrix();
  beginShape(TRIANGLE_STRIP);
  translate(origin_x, origin_y);
  rotate(-PI/2);
  strokeWeight(1.0);
  stroke(140, 100);
  float angle=TWO_PI/(float)randomNumbers.length;
  if (randomNumbers.length > 1) {
    for (int i = 0; i < randomNumbers.length; i++) {
      //drawing the radio of the graph
      float radio_x = myRadio*cos(angle*i);
      float radio_y = myRadio*sin(angle*i);
      fill(0, 150, 200, 150);
      vertex(radio_x, radio_y);
      fill(150, 220);
      ellipse(radio_x, radio_y, 3, 3);
      fill(0, 150, 200, 180);
      //drawing the data
      float myScale = map( randomNumbers[i], 0, maximum, 50, maximum);
      float x = myScale*cos(angle*i);
      float y = myScale*sin(angle*i);
      vertex(x, y);
      fill(250, 130, 0, 250);
      ellipse(x, y, 5, 5);
      fill(0, 150, 200, 180);
    }
    //closing the origin
    float end_radio_x = myRadio*cos(0);
    float end_radio_y = myRadio*sin(0);
    vertex(end_radio_x, end_radio_y);
    first_x = (map( randomNumbers[0], 0, 400, 50, maximum))*cos(0);
    first_y = (map( randomNumbers[0], 0, 400, 50, maximum))*sin(0);
    vertex(first_x, first_y);
    endShape(CLOSE);
    popMatrix();
  }
}

void dataReference(float origin_x, float origin_y, float radio) {
  pushMatrix();
  beginShape(TRIANGLE_STRIP);
  translate(origin_x, origin_y);
  rotate(-PI/2);
  noStroke();
  float angle=TWO_PI/(float)randomNumbers.length;
  if (randomNumbers.length > 1) {
    for (int i = 0; i < randomNumbers.length; i++) {
      //drawing the radio of the graph
      float radio_in_x = myRadio*cos(angle*i);
      float radio_in_y = myRadio*sin(angle*i);
      fill(240, 110);
      vertex(radio_in_x, radio_in_y);

      float radio_x = radio*cos(angle*i);
      float radio_y = radio*sin(angle*i);
      float letterRadio = radio+13;
      float text_radio_x = letterRadio*cos(angle*i);
      float text_radio_y = letterRadio*sin(angle*i);

      fill(240, 100);
      vertex(radio_x, radio_y);

      //draw steps-numbers
      String value = nf(i, 2, 0);
      float textWeight = map(randomNumbers.length, 1, 200, 18, 7); 
      textSize(textWeight);
      pushMatrix();
      translate(text_radio_x-5, text_radio_y);
      rotate(PI/2);
      text(value +" barri", 0, 0);
      popMatrix();
    }
    //end of the graph inside
    float radio_in_x = myRadio*cos(0);
    float radio_in_y = myRadio*sin(0);
    vertex(radio_in_x, radio_in_y);
    //end of the graph outside
    float radio_x = radio*cos(0);//end
    float radio_y = radio*sin(0);//end
    vertex(radio_x, radio_y);
    endShape(CLOSE);
    popMatrix();
  }
}

void drawText(float origin_x, float origin_y) {
  //Drawing all the data in text
  pushMatrix();
  translate(origin_x, origin_y);
  rotate(-PI/2);
  float angle=TWO_PI/(float)randomNumbers.length;
  if (randomNumbers.length > 1) {
    for (int i = 0; i < randomNumbers.length; i++) {
      //drawing the radio of the graph
      float myScale = map( randomNumbers[i], 0, maximum, 50, maximum)+21;
      float x = myScale*cos(angle*i);
      float y = myScale*sin(angle*i);
      textSize(12);
      float thisAngle = (angle) * i; 
      if (thisAngle > PI)thisAngle=thisAngle-PI;
      pushMatrix();
      translate(x, y);
      rotate(thisAngle);
      String data = nf(randomNumbers[i], 2, 2);
      fill(250, 190);
      text(data, 0, 0);
      fill(0, 150, 200, 180);
      popMatrix();
    }
  }
  popMatrix();
}
