/*

 Autor: Alba Corral
 Fecha: 25-05-2023
 */

//variables globales que pueden ser llamadas desde cualquier ambito
let mitad ; //declaracion de variable

//funcion configuracion solo entrara una vez
function setup() {
  createCanvas (windowWidth, windowHeight); //crea el canvas en mi html
  mitad= windowWidth/2;
  // noCursor(); //no aparece el cursor;
  cursor(CROSS);
  frameRate(30);
  //https://www.alegsa.com.ar/Dic/for.php#gsc.tab=0
  for (let a = 0; a < 10; a++) {
   print("contador:"+a);
  }
 // print("-------a"+a);
}

// cada fotograma por segunedo entrará aqui
function draw() {
  
  background("#0EC0EA"); //cambia el color de fondo
  //background(255, 255, 255); //cambia el color de fondo
  ellipse(mitad, height/2, 100, 100);
  dibuja();
  /// print("Hola Mundo----- Console p5.js");
}
//https://stackoverflow.com/questions/62306790/how-to-properly-resize-canvas-according-to-screen-size-javascript-p5-js
//https://p5js.org/es/reference/#/p5/windowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  print("----windowWidth:"+windowWidth);
}

//funcion simple que no devuelve nada ni tiene parametros de entrada
function dibuja() {
  fill(255);
  ellipse(mouseX, mouseY, 100, 100);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}
function mousePressed() {
  print("he pulsado el raton");
}
