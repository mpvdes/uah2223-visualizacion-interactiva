public void reset() {
  //println("banck");
  datas.clear();

  getAll();
}
public void export() {
  PrintWriter output;
  output = createWriter("export_"+distritoActivo+".txt"); 
  int cont = 0;
  for (Datas datasItem : datas) {
    // Convert geo locations to

    ScreenPosition pos = mapDetail.getScreenPosition(datasItem.location);
    Boolean isHit = mapDetail.isHit(pos.x, pos.y);
    //
    if (isHit)  output.println(pos.x + "\t" + pos.y+ "\t" + datasItem.num_pisos+ "\t" + datasItem.tipo); // Write the coordinate to the file

    cont++;
  }
  //println("EXPORTED: "+cont + "rows");

  output.flush(); // Writes the remaining data to the file
  output.close(); // Finishes the file
}

void setupDistrito() {

  int cont = 0;
  for (TableRow dataRow : distritosCSV.rows()) {
    createDistricte(dataRow,cont);
    cont++;
  }
}
void getAll() {

  for (TableRow dataRow : dataCSV.rows()) {
    createRow(dataRow);
  }
}
void createDistricte( TableRow row, int cont) {

  Distrito o_districte ;
  o_districte = new Distrito();
  o_districte.codi_districte = row.getInt("CODI_DISTRICTE");
  o_districte.districte = row.getString("DISTRICTE");
  o_districte.colorr = colores[cont];
  //println("----------------------------nom districte"+  o_districte.districte);
  al_distritos.add(o_districte);
  println("----------------------------nom districte"+  al_distritos);
}
void getDistricte(String nombre) {
  //println("----------------------------nom districte");
  distritoActivo = nombre;
  datas.clear();
  //println("getDistricte per :"+nombre);

  int cont = 0;
  for (TableRow dataRow : dataCSV.rows()) {
    String n = dataRow.getString("DISTRICTE");
    //println("n"+n);
    if (n.equals(nombre) == true) {
      // Create new empty object to store data

      createRow(dataRow);
      cont++;
    }
  }
}
color getColorPorDistricte(int num_districte) {
  color c = color(0);
  Distrito o ;
  for (int i = 0; i < al_distritos.size(); i ++) {
    o = al_distritos.get(i);
    // An ArrayList doesn't know what it is storing so we have to cast the object coming out

    if (num_districte == o.codi_districte) {c =  o.colorr;
    //println("nombre:"+o.districte +" color"+c);
    }
  }
  return c;
}
void createRow(TableRow row) {
  Datas datasItem = new Datas();
   datasItem.tipo = row.getInt("Tipo");
  datasItem.districte = row.getString("DISTRICTE");
  datasItem.id_districte = row.getInt("CODI_DISTRICTE");

  datasItem.colorr = getColorPorDistricte(datasItem.id_districte);
  color_activo = datasItem.colorr;
  datasItem.num_pisos = row.getInt("calculated_host_listings_count");
  float lat = row.getFloat("latitude");
  float lng = row.getFloat("longitude");
  datasItem.location = new de.fhpotsdam.unfolding.geo.Location(lat, lng);
  datas.add(datasItem);
}

void drawPoints() {


  for (Datas datasItem : datas) {
    // Convert geo locations to screen positions
    ScreenPosition pos = mapDetail.getScreenPosition(datasItem.location);
    // Map number of free bikes to radius of circle
   // println(datasItem.tipo);
    noStroke();
    // Draw circle according to available bikes
    if (datasItem.tipo ==2)  fill(255,0,255); else
    fill(datasItem.colorr);
    ellipse(pos.x, pos.y, 10, 10);


    /*fill(0);
     textSize(26); 
     text(1, pos.x - textWidth(datasItem.districte)/2, pos.y);*/
  }
}
