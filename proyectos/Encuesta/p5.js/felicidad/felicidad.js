/*
Proyecto: Encuesta de Satisfaccio
 Autora: Alba
 Fecha:
 
 https://p5js.org/es/get-started/
 */
let mivariable = "Hola";
let minumero = 1.2;

//configuraciones y cosas que solo queremos que pasen una vez
function setup() {
  createCanvas(windowWidth, windowHeight);//creamos Canvas segun el tamaño de mi ventana
  background(255,0,255);
}


function draw() {

  fill(255, 0, 0);
  ellipse(50, 50, 80, 80);
  ellipse(width/2, height/2, 100, 100);
  ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
