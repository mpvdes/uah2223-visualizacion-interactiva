/*
https://github.com/stavrosdidakis/Mappa-GeoJSON-P5
 mostrar en un mapa los diferentes distritos de Barcelona
 los datos los cogeremos del openData Barcelona
 - Buscar codigo y nombre de distritos
 https://duckduckgo.com/?q=districtes+de+Barcelona+site%3Ahttps%3A%2F%2Fopendata-ajuntament.barcelona.cat&t=newext&atb=v349-1&ia=web
 https://opendata-ajuntament.barcelona.cat/data/es/dataset/20170706-districtes-barris
 https://opendata-ajuntament.barcelona.cat/data/es/dataset/20170706-districtes-barris/resource/cd800462-f326-429f-a67a-c69b7fc4c50a
 - buscar limitaciones
 - Poner en el mapa el nombre de los distritos
 
 ----cargar csv de local o remoto
 https://www.youtube.com/watch?v=y_UQdH3Zt2s
 ----librerias de mapa
 Mapbox
 https://www.youtube.com/watch?v=kZYRSOGoM5Q
 https://fablab.ruc.dk/interactive-maps/
 https://leafletjs.com/examples/geojson/
 https://github.com/stavrosdidakis/Mappa-GeoJSON-P5
 Mappa
 
 - como ultimo paso haremos otra reinterpretacion de estos mismos datos usando el canvas del sketch sin usar mapa
 
 */
// API Key for Mapbox. Get one here:
// https://www.mapbox.com/studio/account/tokens/
var myMap;
var canvas;
var mappa = new Mappa('Leaflet');
var geoJSON, geoJSONlength;
var sizeCircle = 80;
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


//Initialize arrays to store the GeoJSON values
var loc = [], lat = [], lon = [], r = [], g = [], b = [];

//
let table; // Global object to hold results from the loadTable call
let distritos = []; // Global array to hold all bubble objects
// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  // mapimg= loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-0.8891,41.6488,12,0/500x500?access_token=pk.eyJ1IjoiamFuZWJldGE3IiwiYSI6ImNqdHJmM3J2dDBuN3k0M3BjbnUwcmRzd3QifQ.gO1dFOUH5tWI60sK7lXxpQ');
  table = loadTable("data/districtes_i_barris_170705.csv", "header");
  //  let  a_codi_barri = table.getColumn("CODI_BARRI");
  //podemos tener un arry con los datos de cada columna
  //geoJSON = loadJSON("data/0301100100_UNITATS_ADM_POLIGONS.json", getGJSON);
    geoJSON = loadJSON("data/neighbourhoods.geojson", getGJSON);
}
function setup() {
  //funcion que solo se ejectua una vez, comandos de configuracion
  canvas = createCanvas(1280, 720);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)
    loadData();

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  // Only redraw the meteorites when the map change and not every frame.
  //myMap.onChange(drawMeteorites);
}
function draw() {
  drawPoint();
}


/*---FUNCIONES -----*/
// Convert saved Bubble data into Bubble Objects
function loadData() {
  const distritosData = table.getRows();
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  const length = table.getRowCount();
  print('-- Numero de filas:'+length);
  for (let i = 1; i < length; i++) {
    // Get position, diameter, name,
    const codi_districte = distritosData[i].getString("CODI_DISTRICTE");
    const codi_barri = distritosData[i].getString("CODI_BARRI");
    const nom_barri = distritosData[i].getString("NOM_BARRI");
    const  nom_district = distritosData[i].getString("NOM_DISTRICTE");
    let distritoID = getId(nom_district);
    if  (!existeDistrito(nom_district)) { // no existe
      distritos.push(new Distrito(nom_district, codi_districte));
      distritoID = getId(nom_district);
    }
    distritos[distritoID].barrios.push((new Barrio(nom_barri, nom_district, distritoID)));
  }
}
