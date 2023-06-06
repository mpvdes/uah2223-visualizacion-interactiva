/*

 Autor: Juan Luis Monterroso
 Fecha: 29/05/2023
 */
//variables globales que pueden ser llamadasdesde cualquier ámbito
let mitad ; //declaración de variable
let fondo ;
let url = [
  "https://coolors.co/264653-60935d-bab700-bbdfc5-ff579f",
  "https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557",
  "https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c",
  "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff",
  "https://coolors.co/00e0b0-14213d-fca311-e5e5e5-cf7f3f"
];
function setup() { //solo lo dibuja una vez
  createCanvas (windowWidth, windowHeight); //crea el canvas en el html con ancho responsivo
  mitad = windowWidth/2;
  let paleta = createPalette(random(url));
  let fondo = paleta[0];
  print("paleta:"+paleta);
  // noCursor(); // no aparece el cursor
  cursor(CROSS);
  frameRate(30); //entra 30 veces por segundo, por defecto es 30
 
}

function draw() { //va entrando todo el rato

  //background(255, 255, 255); //cambia el color de fondo. varia ponerlo en setup o draw
  background(fondo); //cambia el color del fondo

  //ellipse(mitad, height/2, 100, 100);
  dibuja();
  //print("Hola Mundo---------- Console p5.js");
}

function windowsResized() {
  resizeCanvas(windowWidth, windowHeight);
  print("He hecho un resize de pantalla");
}

//funcion simple que no devuelve nada ni tiene parámetros de entrada
function dibuja() {
  fill(255); //rellena del color que le decimos
  let tamanio = mouseX;
  let nuevo_tamanio = map(tamanio, 0, windowWidth, 10, 100);
  ellipse(windowWidth/2, windowHeight/2, nuevo_tamanio, nuevo_tamanio); //crea una elipse con el ratón
  print("tamanio:"+tamanio+ " nuevo_tamanio:"+nuevo_tamanio );
  // fill(255, 0, 0); // rellena
  // ellipse(windowWidth/2, windowHeight/2, 50, 50); //crea una elipse dentro de la anterior elipse
}

function mousePressed() {
  print("he pulsado el ratón");
}
