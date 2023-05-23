/*
mostrar en un mapa los diferentes distritos de Barcelona
 los datos los cogeremos del openData Barcelona
 - Buscar codigo y nombre de distritos
 https://duckduckgo.com/?q=districtes+de+Barcelona+site%3Ahttps%3A%2F%2Fopendata-ajuntament.barcelona.cat&t=newext&atb=v349-1&ia=web
 https://opendata-ajuntament.barcelona.cat/data/es/dataset/20170706-districtes-barris
 - buscar limitaciones
 - Poner en el mapa el nombre de los distritos
 
 ----cargar csv de local o remoto
 https://www.youtube.com/watch?v=y_UQdH3Zt2s
 ----librerias de mapa
 Mapbox
 Mappa
 
 - como ultimo paso haremos otra reinterpretacion de estos mismos datos usando el canvas del sketch sin usar mapa
 
 */
let table; // Global object to hold results from the loadTable call
let distritos = []; // Global array to hold all bubble objects
// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  table = loadTable("data/districtes_i_barris_170705.csv", "header");
  let  a_codi_barri = table.getColumn("CODI_BARRI");
  //podemos tener un arry con los datos de cada columna
}
function setup() {
  //funcion que solo se ejectua una vez, comandos de configuracion
  createCanvas(600, 600 );
  loadData();
}
function draw() {
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
