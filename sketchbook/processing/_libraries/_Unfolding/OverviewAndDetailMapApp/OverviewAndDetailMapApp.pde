/**
 * Shows an overview, and a detail map. The overview is a small-scale map, and shows the same area as the
 * large-scale detail map.
 * 
 * Both maps are interactive, and can be navigated. Each interaction is reflected in both maps. This Overview + Detail
 * example shows how to setup simple connected map views.
 * 
 */

import de.fhpotsdam.unfolding.*;
import de.fhpotsdam.unfolding.geo.*;
import de.fhpotsdam.unfolding.utils.*;
import de.fhpotsdam.unfolding.events.EventDispatcher;
import de.fhpotsdam.unfolding.interactions.MouseHandler;

UnfoldingMap mapDetail;
UnfoldingMap mapOverview;
String bikeFile = "turismo_2018.csv"; // in case URL goes down
//String bikeFile = "turismo_2022.csv"; // in case URL goes down
Table table;

ArrayList<BikeStation> bikeStations = new ArrayList();
int maxBikesAvailable = 0;
String[] a_distritos = {"CIUTAT VELLA", "SANTS-MONTJUÏC", "LES CORTS", "NOU BARRIS", "SANT ANDREU", "SANT MARTI", "L'EIXAMPLE", "GRACIA", "HORTA-GUINARDÓ", "SARRIA-SANT GERVASI"};
Distrito[] o_distritos ;
color[] colores = {#f0101c, #f05697, #0b469b, #32b6c3, #f78000, #fddf0e, #9fe063, #315423, #16141b, #ffffff};
public void setup() {
  size(1080, 1920, P2D);
  o_distritos = new Distrito[a_distritos.length];
  for (int i = 0; i < a_distritos.length; i = i+1) {
    o_distritos[i] = new Distrito(i, a_distritos[i], colores[i]);
    println("-----i:" +i + " +o_distritos.nombre:"+o_distritos[i].nombre +" color:"+ hex(o_distritos[i].colorr));
  }



  mapDetail = new UnfoldingMap(this, "detail", 10, 10, width, height);
  mapDetail.setTweening(true);
  mapDetail.zoomToLevel(4);
  mapDetail.zoomAndPanTo(13, new Location(41.38879, 2.15899));
  mapOverview = new UnfoldingMap(this, "overview", 605, 10, 185, 185);
  mapOverview.setTweening(true);

  EventDispatcher eventDispatcher = new EventDispatcher();

  // Add mouse interaction to both maps
  MouseHandler mouseHandler = new MouseHandler(this, mapDetail, mapOverview);
  eventDispatcher.addBroadcaster(mouseHandler);

  // Maps listen to each other, i.e. each interaction in one map is reflected in the other
  eventDispatcher.register(mapDetail, "pan", mapDetail.getId(), mapOverview.getId());
  eventDispatcher.register(mapDetail, "zoom", mapDetail.getId(), mapOverview.getId());
  eventDispatcher.register(mapOverview, "pan", mapDetail.getId(), mapOverview.getId());
  eventDispatcher.register(mapOverview, "zoom", mapDetail.getId(), mapOverview.getId());


  // Load CSV data
  table = loadTable("turismo_2018.csv", "header");

  println(table.getRowCount() + " total rows in table");

  for (TableRow row : table.rows()) {


    String species = row.getString("DISTRICTE");
    String name = row.getString("CARRER");

    //println(name + " (" + species + ") has an DISTRICTE of " + species);
  }

  // Load CSV data
  int cont = 0;
  Table bikeDataCSV = loadTable(bikeFile, "header, csv");
  for (TableRow bikeStationRow : bikeDataCSV.rows()) {
    // Create new empty object to store data
    BikeStation bikeStation = new BikeStation();
   
    // Read data from CSV
    bikeStation.id = cont;
    bikeStation.carrer = bikeStationRow.getString("CARRER");
    bikeStation.districte = bikeStationRow.getString("DISTRICTE");
    int id =  getDistritoid(bikeStation.districte);
     bikeStation.colorr = o_distritos[id].colorr;
    bikeStation.tipus_carrer = bikeStationRow.getString("TIPUS_CARRER");
    float lat = bikeStationRow.getFloat("LATITUD_Y");
    float lng = bikeStationRow.getFloat("LONGITUD_X");
    bikeStation.location = new Location(lat, lng);

    // Add to list of all bike stations
    bikeStations.add(bikeStation);

    // Debug Info
    // println("Added " + bikeStation.carrer + " / " + bikeStation.districte );

    // Statistics (well, sort of)
    cont++;
  }

  //println("Loaded " + bikeStations.size());
}

public void draw() {
  background(0);

  mapDetail.draw();
  // mapOverview.draw();
  // Iterate over all bike stations
  for (BikeStation bikeStation : bikeStations) {
    // Convert geo locations to screen positions
    ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
    // Map number of free bikes to radius of circle


    // Draw circle according to available bikes
    fill(bikeStation.colorr);
    ellipse(pos.x, pos.y, 10, 10);

    if (bikeStation.showLabel) {
      fill(200);
      text(bikeStation.carrer, pos.x - textWidth(bikeStation.carrer)/2, pos.y);
    }
  }
}

int getDistritoid(String name) {
  //devolvemos el id del Distrito para sacar el color correspondiente
  
    for (int i = 0; i < a_distritos.length; i = i+1) {
      println("Equal "+o_distritos[i].nombre +" "+name);  // They are equal, so this line will print
    if (o_distritos[i].nombre.equals(name) == true) {
      
      return i;
    }
  }
  return 0 ;
}
