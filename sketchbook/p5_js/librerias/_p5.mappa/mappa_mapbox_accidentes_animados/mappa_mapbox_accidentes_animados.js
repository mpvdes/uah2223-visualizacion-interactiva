/* -----------
 Mapbox Demo demo.
 Datos de accidentes de trafico de Zaragoza
 ----------- */
let orange;
let cargado;
let canvas;
let myMap;
let data;
let accidentes;
let currentAccidente = 0;
let white;


const w = 1200;
const h = 1200;
const key = 'SECRET_KEY'

  const options = {
  lat: 
41.6590209, 
  lng: 
-0.9067806, 
  zoom: 
12, 
  style: 
'mapbox://styles/mapbox/dark-v9', 
  pitch: 
10, 
  };

// API Key for Mapbox. Get one here:
// https://www.mapbox.com/studio/account/tokens/




// Create an instance of Mapbox
const mappa = new Mappa('MapboxGL', key);

function preload() {
  data = loadTable('data/accidentes.csv', 'csv', 'header');
  cargado = true;
}
function setup() {
  orange = color(255, 170, 37, 170);
  canvas = createCanvas(w, h);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); 

  accidentes = new AccidenteSystem();
  noStroke();
  white = color(255, 255, 255);
  orange = color(255, 170, 37, 170);
}

// The draw loop is fully functional but we are not using it for now.

function draw() {
  clear();
  if (cargado== true) {
    accidentes.destroyTheEarth();
    accidentes.showLanded();

    if (random() > 0.8) {
      accidentes.addAccidente(data.getString(currentAccidente, 'latitudes'), data.getString(currentAccidente, 'longitudes'), 10);
      currentAccidente++;
    }
  }
}
