let table; // Global object to hold results from the loadTable call

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  table = loadTable("data/totales_escrutinio_4_301.csv", "header");
  print(table);
}

function setup() {
  createCanvas(640, 360);
  loadData();
}


function draw() {
  background("#56A1FA");
}
