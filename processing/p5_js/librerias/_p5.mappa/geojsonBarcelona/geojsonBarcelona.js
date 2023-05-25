let boundary;
let padding = 20;
var data, geoJSONlength;
/*https://geojson.io
 //https://mits003.github.io/studio_null/2021/11/geojson-with-p5js/
 //https://github.com/martgnz/bcn-geodatalet lonMax =0;
 */
let lonMin ;

let latMax ;
let latMin ;
var loc = [],
  lat = [],
  lon = [];
var mappa = new Mappa('Leaflet');
//Setting up properties for the Leaflet-Mappa
var options = {
  lat:
41.3828939,
  lng:
2.1774322,
  zoom:
13.4,
  style:
"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }

function preload() {

  data = loadJSON("data/districtes_barcelona.geojson", getGJSON);
  // boundary = loadJSON("data/districtes_barcelona.geojson");
}

function setup() {
  canvas = createCanvas(windowHeight, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)
   
}
function draw() {
  drawBarrios();
}
