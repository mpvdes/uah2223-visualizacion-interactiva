// Chart animated for p5.js
// Jerome Mercier
// https://www.jmercier.fr

// source
//https://openprocessing.org/sketch/743382
let font,
  fontsize = 40;
let easing = 0.1;
let pies = [];
let colors = [];
let unit = 300;
let count;
function setup() {
  createCanvas(windowWidth, windowWidth);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  init();
}
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //https://github.com/ryanoasis/nerd-fonts/wiki
  font = loadFont('data/SourceSansPro-Regular.otf');
}
function draw() {
  background(colors[0]);
  textSize(20);
  fill(colors[3]);
  text("TITULAR", width/2, 100);

  noStroke();
  for (let i = 0; i < count; i++) {
    pies[i].run();
  }
}
