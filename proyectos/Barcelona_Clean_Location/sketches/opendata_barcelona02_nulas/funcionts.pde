String FOLDER = "/home/janebeta7/Nextcloud/CODE/2023/2023_OPENDATA_CITY/sketeches/opendata_barcelona02/"; //<>// //<>// //<>//



public void reset() {
  println("banck");
  bikeStations.clear();

  getAll();
}
public void export() {
  //https://forum.processing.org/two/discussion/8840/how-to-append-a-new-line-of-text-to-an-existing-text-file.html

  PrintWriter w = null;
  final String FILE = "export_"+distritoActivo+".txt"; 


  try {
    w = new PrintWriter(new BufferedWriter
      (new FileWriter(FOLDER + FILE, true)));


    int cont = 0;
    for (BikeStation bikeStation : bikeStations) {
      // Convert geo locations to

      ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
      Boolean isHit = mapDetail.isHit(pos.x, pos.y);
      //
      if (isHit)  w.println(pos.x + "\t" + pos.y+ "\t" + "0"+ "\t" + "Legales"); // Write the coordinate to the file

      cont++;
    }
    println("---numero de rows añadidos:"+cont);
  }

  catch (IOException cause) {
    cause.printStackTrace();
  }

  finally {
    if (w != null)  w.close();
  }
  printArray(loadStrings(FOLDER + FILE));
}
void getAll() {
  int cont = 0;
  for (TableRow bikeStationRow : bikeDataCSV.rows()) {

    createRow(cont, bikeStationRow);
    cont++; //<>//
  }
}
int getDistritoid(String name) {
  //devolvemos el id del Distrito para sacar el color correspondiente

  for (int i = 0; i < a_distritos.length; i = i+1) { //<>//
    println("Equal "+o_distritos[i].nombre +" "+name);  // They are equal, so this line will print
    if (o_distritos[i].nombre.equals(name) == true) {

      return i;
    }
  }
  return 0 ;
}
void getDistricte(String nombre) {
  println("get");
  distritoActivo = nombre;
  bikeStations.clear();
  println("getDistricte per :"+nombre);

  int cont = 0;
  for (TableRow bikeStationRow : bikeDataCSV.rows()) {
    String n = bikeStationRow.getString("neighbourhood");
    println("---------n"+n +"nombre:"+nombre);
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

  bikeStation.districte = row.getString("neighbourhood");
  //println("bikeStation.districte:"+);
  int idD =  getDistritoid(bikeStation.districte);
  bikeStation.colorr = o_distritos[idD].colorr;
  color_activo = bikeStation.colorr;

  float lat = row.getFloat("latitude");
  float lng = row.getFloat("longitude");
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
