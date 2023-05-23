

function getGJSON(data) {
  print(data[0]);
  geoJSONlength = data[0].features.length;
  print("geoJSONlength:"+geoJSONlength);

  for (var i = 0; i < geoJSONlength; i++) {
    // print(data[0].features[i].properties.neighbourhood+ " / "+data[0].features[i].properties.neighbourhood_group);
    var  barrios  = data[0].features[i].geometry.coordinates[0][0];
   // print("+++++barrios: "+barrios.length);
    for (var j = 0; j < barrios.length; j++) {
      // print("lon:"+barrios[j][0]);

      lat.push(barrios[j][0]);
      lon.push(barrios[j][1]);
    }
  }
  lonMax =lon.max();
  lonMin =lon.min();
  latMax =lat.max();
  latMin= lat.min(lat);
}
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
function drawBarrios() {
  clear(); //limpiamos pantalla
  geoJSONlength = data[0].features.length;
 // print("geoJSONlength:"+geoJSONlength);
  fill('#81b214');
  stroke('#fff');
  for (var i = 0; i < geoJSONlength; i++) {
    // print(data[0].features[i].properties.neighbourhood+ " / "+data[0].features[i].properties.neighbourhood_group);
    var  barrios  = data[0].features[i].geometry.coordinates[0][0];
    // print("+++++barrios: "+barrios.length);
    beginShape();
    for (var j = 0; j < barrios.length; j++) {
      // print("lon:"+barrios[j][0]);
      // loc[i] = myMap.latLngToPixel(lat[i], lon[i]);

      let lon = barrios[j][0];
      let lat = barrios[j][1];
      let x = myMap.latLngToPixel(lat, lon).x;
      let y = myMap.latLngToPixel(lat, lon).y;

      // print("x:"+x);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

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
