function getId(nombre) {
  let id = 99;
  for (let i = 0; i < distritos.length; i++) {
    if (distritos[i].nombre==nombre) {
      id = i;
    }
  }
  return id;
  //nos devuelve el indice del distrito segun su nombre
}
function existeDistrito(nombre) {
  let existe = false;
  for (let i = 0; i < distritos.length; i++) {

    if (distritos[i].nombre==nombre) {
      // print("----------------------exsite"+distritos[i].nombre +"nombre"+nombre +"id"+i);
      existe = true;
    }
  }
  return existe;
}

//Call-back function for getting the GeoJSON data
//After extraction, push the values on each separate array
function getGJSON(data){
  geoJSONlength = data.features.length;
 
  
  
  for (var i = 0; i < geoJSONlength; i++) {
    print("lat"+data.features[i].geometry.coordinates[1]);
    lat.push(data.features[i].geometry.coordinates[1]);
    lon.push(data.features[i].geometry.coordinates[0]);
    r.push(data.features[i].r);
    g.push(data.features[i].g);
    b.push(data.features[i].b);
  }
}

// We moved everything to this custom function that
// will be trigger only when the map moves
function drawPoint(){
  clear();
  for (var i=0; i<geoJSONlength; i++){
    //Convert all points from latitude and longitude to pixel
    loc[i] = myMap.latLngToPixel(lat[i], lon[i]);
    fill(255, 0, 255, 80);
    stroke(255, 255, 255);
    strokeWeight(3);
    //Draw the ellipses on the location points
    ellipse(loc[i].x, loc[i].y, sizeCircle, sizeCircle);
    
    //Run the distancePlace function that draws the interactive animation
    distancePlace(loc[i].x, loc[i].y, r[i], g[i], b[i]);
  }
}

//Function that calculates and draws on the screen the distance
//between the mouse position and the locations on screen
function distancePlace(x, y, r, g, b){
  var distanceCalc = dist(mouseX, mouseY, x, y);
  if (distanceCalc<sizeCircle/2){
    var mapAlpha = map (distanceCalc, 0, 50, 255, 0);
    fill(r, g, b, mapAlpha)
  } else {
    fill (0, 0);
  }
  noStroke();
  ellipse(x, y, sizeCircle+3, sizeCircle+3);
  var strokeMap = map (distanceCalc, 0, 350, 255, 0);
  stroke(r, g, b, strokeMap);
  var strokeWeightMap = map (distanceCalc, 0, 350, 20, 0);
  strokeWeight(strokeWeightMap);
  line(mouseX, mouseY, x, y);
}
