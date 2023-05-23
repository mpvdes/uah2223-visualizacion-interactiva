public void reset() {
  println("banck");
  bikeStations.clear();

  getAll();
}
void getAll() {
  int cont = 0;
  for (TableRow bikeStationRow : bikeDataCSV.rows()) {
    // Create new empty object to store data

    // Create new empty object to store data
    createRow(cont, bikeStationRow);
    cont++;
  }
}
int getDistritoid(String name) {
  //devolvemos el id del Distrito para sacar el color correspondiente

  for (int i = 0; i < a_distritos.length; i = i+1) {
    //println("Equal "+o_distritos[i].nombre +" "+name);  // They are equal, so this line will print
    if (o_distritos[i].nombre.equals(name) == true) {

      return i;
    }
  }
  return 0 ;
}
void getDistricte(String nombre) {
  bikeStations.clear();
  println("getDistricte per :"+nombre);
    
  int cont = 0;
  for (TableRow bikeStationRow : bikeDataCSV.rows()) {
    String n = bikeStationRow.getString("DISTRICTE");
    
    if (n.equals(nombre) == true) {
     
      // Create new empty object to store data
      createRow(cont, bikeStationRow);
      cont++;
    }
  }
}

void createRow(int id, TableRow row) {
  BikeStation bikeStation = new BikeStation();
  bikeStation.id = id;
  bikeStation.carrer = row.getString("CARRER");
  bikeStation.districte = row.getString("DISTRICTE");
  int idD =  getDistritoid(bikeStation.districte);
  bikeStation.colorr = o_distritos[idD].colorr;
  color_activo = bikeStation.colorr;
  bikeStation.tipus_carrer = row.getString("TIPUS_CARRER");
  float lat = row.getFloat("LATITUD_Y");
  float lng = row.getFloat("LONGITUD_X");
  bikeStation.location = new Location(lat, lng);

  bikeStations.add(bikeStation);
}

void drawPoints() {
  
 
  for (BikeStation bikeStation : bikeStations) {
    // Convert geo locations to screen positions
    ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
    // Map number of free bikes to radius of circle

    noStroke();
    // Draw circle according to available bikes
    fill(bikeStation.colorr);
    ellipse(pos.x, pos.y, 10, 10);

    if (bikeStation.showLabel) {
      fill(0);
      textSize(26); 
      text(bikeStation.districte, pos.x - textWidth(bikeStation.districte)/2, pos.y);
    }
  }
}
