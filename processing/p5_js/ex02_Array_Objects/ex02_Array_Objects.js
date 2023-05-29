/*
 * @name Array Objects
 * @arialabel Small white circles all over a black background that move side to side and sometimes collide and bounce off of each other 
 * @description Demonstrates the syntax for creating an array of custom objects.
 */

let unit = 300;
let count;
let mods = [];

function setup() {
  createCanvas(1500, 1500);
  unit = width/3;
  noStroke();
  let wideCount = width / unit;
  let highCount = 2;
  count = wideCount * highCount;

  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 2,
        unit / 2,
       0, //movimiento que no nos interesa
        unit
      );
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }
}
