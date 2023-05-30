/*

Autor: Juan Luis Monterroso
Fecha: 29/05/2023
*/
//variables globales que pueden ser llamadasdesde cualquier ámbito
let mitad ; //declaración de variable

function setup() { //solo lo dibuja una vez
createCanvas (windowWidth, windowHeight); //crea el canvas en el html con ancho responsivo
mitad = windowWidth/2;
// noCursor(); // no aparece el cursor
cursor(CROSS);
  frameRate(30); //entra 30 veces por segundo, por defecto es 30
  //https://www.alegsa.com.ar/Dic/for.php......
  for (let a = 0; a < 10; a += 1) { //bucle (cuenta de 0 hasta que sea menor de 10, de uno en uno)
    line(a, 0, a, height);
print("contador"*a);}
}

function draw() { //va entrando todo el rato

//background(255, 255, 255); //cambia el color de fondo. varia ponerlo en setup o draw
background("#44C69C"); //cambia el color del fondo

ellipse(mitad, height/2,100,100);
dibuja();
//print("Hola Mundo---------- Console p5.js");
}

function windowsResized(){
  resizeCanvas(windowWidth, windowHeight);
  print("He hecho un resize de pantalla");
}

//funcion simple que no devuelve nada ni tiene parámetros de entrada
function dibuja(){
fill(255); //rellena del color que le decimos
ellipse(mouseX, mouseY, 100, 100); //crea una elipse con el ratón

fill(255, 0, 0); // rellena
ellipse(mouseX, mouseY, 50, 50); //crea una elipse dentro de la anterior elipse
}

function mousePressed() {
  print("he pulsado el ratón");
}
