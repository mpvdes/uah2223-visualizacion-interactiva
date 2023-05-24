class Button {
  float x, y;
  color colRect;
  color colRect2;

  float sz;
  boolean off = true; // button starts in OFF position

  Button ( 
    float tempX, float tempY, 
    color tempColor, color tempColor2, float tempSz) {

    x = tempX;
    y = tempY;

    colRect = tempColor;
    colRect2 = tempColor2;

    sz = tempSz;
  }

  void display() {
    if (off) {
      fill (colRect);
      noStroke();
    } else {
      fill (colRect2);
      noStroke();
    }

    rectMode(CENTER);
    rect(x, y, sz, sz);
  }

  void mouseOver() {

    if (mouseX > x - sz/2  && 
      mouseX < x + sz/2  &&
      mouseY > y - sz/2  &&
      mouseY < y + sz/2  ) {

      off = false;
    } else {
      off = true;
    }
  }
}
