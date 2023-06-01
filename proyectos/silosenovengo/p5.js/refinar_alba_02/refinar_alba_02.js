//variables globales

let data; //declaracion de variable

function setup() {
createCanvas(512,512);
data = loadImage("data/totales_escrutinio_4_301.csv"); //he metido un valor en la variable
}


function draw() {
image(data,0,0,width,height);
}
