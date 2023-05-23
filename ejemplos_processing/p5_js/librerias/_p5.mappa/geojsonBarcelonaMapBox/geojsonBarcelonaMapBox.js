
// API Key for Mapbox. Get one here:
// https://www.mapbox.com/studio/account/tokens/
const key = 'key'
  let boundary;
let padding = 20;
var data, geoJSONlength;
/*https://geojson.io
 //https://mits003.github.io/studio_null/2021/11/geojson-with-p5js/
 //https://github.com/martgnz/bcn-geodatalet lonMax =0;
 */

var lat = [],
  lon = [];

const options = {
  lat:
41.3828939,
  lng:
2.1774322,
  zoom:
12,
  style:
'mapbox://styles/mapbox/dark-v9',
  pitch:
10,
  };
  
  const mappa = new Mappa('MapboxGL', key);
//Setting up properties for the Leaflet-Mappa


function preload() {

  data = loadJSON("data/districtes_barcelona.geojson", getGJSON);
  // boundary = loadJSON("data/districtes_barcelona.geojson");
}

function setup() {
  canvas = createCanvas(windowHeight, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}
function draw() {
  drawBarrios();
}
