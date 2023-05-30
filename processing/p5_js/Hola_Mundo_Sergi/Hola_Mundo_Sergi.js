/*
Nombre: Sergi Pont
Fecha: 29-05-2023
*/

// variables globales que pueden ser llamadas desde cualquier ámbito
let mitad = width/2;



//función setup, que solo entra una vez
function setup() {
createCanvas (windowWidth, windowHeight); //crea el canvas en mi html
print("Hola Mundo");
noCursor(); //no aparece el cursor;
console.log("Hola mundo console log");
let x; //declaración de variable
let mitad = windowWidth/2; //declaracion de variable
print("mitad"+mitad);
}

//cada fotograma por segundo entrará por aquí
function draw() {
background ("#5AD6E5"); //cambia el color de fondo
ellipse(mouseX, mouseY, 100, 100);
}

function WindowResized() {
print("He hecho un resize");
}

// función simple que no devuelve nada ni tiene parámetros de entrada
function dibuja() {
}
