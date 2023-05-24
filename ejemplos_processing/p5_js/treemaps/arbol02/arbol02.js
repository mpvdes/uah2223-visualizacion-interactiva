function setup() {
  createCanvas(800, 800);
  noLoop();
  noStroke();
  paintNewTree();
}


function draw() {
}

/*
     * This function creates a tree iteratively and paints it in the canvas
 */
function paintNewTree() {
  var position = createVector(0.5 * width, 0.95 * height, 0);//posicion inicial del arbol
  var length = height / 7;//altura
  var diameter = length / 4.5;//diametro
  var angle = -HALF_PI + (PI / 180) * random(-5, 5); //angulo
  var colorr = color(130, 80, 20); //color
  var level = 1;
  var tree = new Branch(position, length, diameter, angle, colorr, level);

  // Paint the tree
  background(245);
  tree.paint();
}
