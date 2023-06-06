let table; // Global object to hold results from the loadTable call
let fondo;
let paleta;
let url = [
  "https://coolors.co/264653-60935d-bab700-bbdfc5-ff579f",
  "https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557",
  "https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c",
  "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff",
  "https://coolors.co/00e0b0-14213d-fca311-e5e5e5-cf7f3f"
];


//https://coolors.co/aaabbc-0a014f
// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  table = loadTable("data/totales_escrutinio_4_301.csv", "header");
  print(table);
}

function setup() {
  createCanvas(640, 360);
  paleta = createPalette(random(url));
  fondo = paleta[0];
  loadData();
}


function draw() {
  print("fondo:"+fondo);
  background(fondo); //cambia el color del fondo
  
}
