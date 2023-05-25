int gridX = 7; 
int gridY = 4;
int many = gridX*gridY; // cells per row and column, # in total

Button [] myButtons = new Button [many]; // declaring Button class array

int r = int(random(255));
int g = int(random(255));
int b = int(random(255));

color background = color ( r, g, b) ; 

void setup() {
  size (1920, 800);

  int x = 40 + 50, y = x, // dist from screen border
    w = 100, h = w, off = 15; // width and height of one cell, dist btwn cells

  int k = 0; // counter for button objects in array
  for (int i = 0; i < gridX; i++) { // counter for xpos on grid
    for (int i2 = 0; i2 < gridY; i2++) { // counter for ypos on grid
      myButtons [k] = new Button ( x + i * (w+off), y + i2 * (h+off), 
        color (random(255), random(255), random(255)), // random colors
        color (random(255), random(255), random(255)), // new random colors when on / off toggle 
        random(50, 125)); // random sizes
      k++;
    }
  }
}
void draw() {

  background (background);

  for (int i = 0; i < many; i++) 
    myButtons[i].mouseOver();

  for (int i = 0; i < many; i++) 
    myButtons[i].display();
}

void mouseClicked() { 

  background = color(random(255), random(255), random(255));
}
