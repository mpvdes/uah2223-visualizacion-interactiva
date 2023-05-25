
// GRID array of a class

int grid=5, // how many cells per row and column
  many=grid*grid;    // how many in total 

Button [] myButtons = new Button [many];

void setup() {
  size (800, 1000);

  int x=40, y=x, // dist from screen border 
    w=50, h=w, // width and height of one cell 
    off=5;  // dist between cells 

  int k=0; 
  for (int i = 0; i < grid; i++) {
    for (int i2 = 0; i2 < grid; i2++) {
      myButtons [k] = new Button ( x+ i *( w+off), y+ i2 *(h+off), 
        w, h, 
        int(random(255)), 
        25 ); // 25 = size
      k++;
    }
  }
}

void draw() {
  background (255);
  for (int i = 0; i < many; i++) 
    myButtons[i].display();
}

// -----------------------------------------------------------------

void mousePressed() {
  for (int i = 0; i < many; i++) 
    myButtons[i].click();
}

// ====================================================================================

class Button {
  float x, y, w, h;
  color col;
  float sz;
  boolean on = false;   // button starts in the off position

  Button(float tempx, float tempy, 
    float tempw, float temph, 
    color tempCol, 
    float tempSz) {
    x=tempx;
    y=tempy;
    w=tempw;
    h=temph;
    col = tempCol;
    sz = tempSz;

    //checking for edges
    if (x+sz>=width)  
      x=width-sz-1;  
    if (y+sz>=height)
      y=height-sz-1;
  }

  void display() {
    if (on) {    // fill + stroke appearance when button is on / off
      fill (255);
      stroke(0);
    } else {
      fill (col);
      stroke (255);
    }
    rect (x, y, w, h); //sz, sz);
  }

  void click() {
    if (mouseX > x && 
      mouseX < x + w && 
      mouseY > y && 
      mouseY < y + h) 
      on = !on; // toggle
  }
  //
}//class
//
