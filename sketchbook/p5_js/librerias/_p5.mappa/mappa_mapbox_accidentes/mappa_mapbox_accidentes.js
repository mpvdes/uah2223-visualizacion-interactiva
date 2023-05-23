/* -----------
 Mapbox Demo demo.
 Datos de accidentes de trafico de Zaragoza
 ----------- */

// API Key for Mapbox. Get one here:
// https://www.mapbox.com/studio/account/tokens/
const key = 'key'
  let orange;
// Options for map
const options = {
  lat: 
41.6590209, 
  lng: 
-0.9067806, 
  zoom: 
13, 
  studio: 
true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  //style: 'mapbox://styles/mapbox/traffic-night-v2',
 // style: 'mapbox://styles/mapbox/streets-v11'
 style: 'mapbox://styles/mapbox/dark-v9'


  };
let tipos = [];

// Create an instance of Mapbox
const mappa = new Mappa('Mapbox', key);
let myMap;

let canvas;
let accidentes;

function setup() {
  canvas = createCanvas(1000, 1000);
  orange = color(255, 170, 37, 170);
  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Load the data
  accidentes = loadTable('data/accidentes.csv', 'csv', 'header');

  // Only redraw the accidentes when the map change and not every frame.
  myMap.onChange(drawAccidentes);

  fill(255, 0, 0);
  stroke(100);
}

// The draw loop is fully functional but we are not using it for now.
function draw() {
}

function drawAccidentes() {
  // Clear the canvas
  clear();

  for (let i = 0; i < accidentes.getRowCount(); i += 1) {
    // Get the lat/lng of each meteorite
    const latitude = Number(accidentes.getString(i, 'latitudes'));
    const longitude = Number(accidentes.getString(i, 'longitudes'));
    
    // Only draw them if the position is inside the current map bounds. We use a
    // Mapbox method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in https://www.mapbox.com/mapbox.js/api/v3.1.1/l-latlngbounds/
    if (myMap.map.getBounds().contains([latitude, longitude])) {
      // Transform lat/lng to pixel position
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      //let size = accidentes.getString(i, 'mass (g)');
      //size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
      stroke(255);
      strokeWeight(5);
      fill(orange);
      ellipse(pos.x, pos.y, 10, 10);
    }
  }
}
