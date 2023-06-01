//variables globales

let img; //declaracion de variable

function setup() {
createCanvas(512,512);
img = loadImage("data/migif.gif"); //he metido un valor en la variable
}


function draw() {
image(img,0,0,width,height);
}
