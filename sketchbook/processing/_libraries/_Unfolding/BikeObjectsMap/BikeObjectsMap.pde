/*
 * Bike Map showing all Cycle Hire stations and their available bikes.
 *
 * Example shows how to load and display CSV data. Shows bike stations directly (i.e. without markers)
 *
 * Created for Unfolding workshop at Royal College of Art.
 * (c) 2014 Till Nagel, tillnagel.com
 */
import de.fhpotsdam.unfolding.*;
import de.fhpotsdam.unfolding.geo.*;
import de.fhpotsdam.unfolding.utils.*;
import de.fhpotsdam.unfolding.events.EventDispatcher;
import de.fhpotsdam.unfolding.interactions.MouseHandler;

String bikeAPIUrl = "http://api.bike-stats.co.uk/service/rest/bikestats?format=csv";
String bikeFile = "turismo_2018.csv"; // in case URL goes down
String bikeDataFile = bikeAPIUrl;
UnfoldingMap mapDetail;

Table table;

ArrayList<BikeStation> bikeStations = new ArrayList();
int maxBikesAvailable = 0;

void setup() {
  size(1920, 1080, P2D);
  smooth();

  mapDetail = new UnfoldingMap(this, "detail", 10, 10, width, height);
  mapDetail.setTweening(true);
  mapDetail.zoomToLevel(4);
  mapDetail.zoomAndPanTo(13, new Location(41.38879, 2.15899));
 EventDispatcher eventDispatcher = new EventDispatcher();

  // Add mouse interaction to both maps
  MouseHandler mouseHandler = new MouseHandler(this, mapDetail);
  eventDispatcher.addBroadcaster(mouseHandler);


  
  
  // Load CSV data
  table = loadTable("turismo_2018.csv", "header");

  println(table.getRowCount() + " total rows in table");

  for (TableRow row : table.rows()) {


    String species = row.getString("DISTRICTE");
    String name = row.getString("CARRER");

    //println(name + " (" + species + ") has an DISTRICTE of " + species);
  }

  // Load CSV data
  Table bikeDataCSV = loadTable(bikeFile, "header, csv");
  for (TableRow bikeStationRow : bikeDataCSV.rows()) {
    // Create new empty object to store data
    BikeStation bikeStation = new BikeStation();

    // Read data from CSV

    bikeStation.carrer = bikeStationRow.getString("CARRER");
    bikeStation.districte = bikeStationRow.getString("DISTRICTE");
    bikeStation.tipus_carrer = bikeStationRow.getString("TIPUS_CARRER");
    float lat = bikeStationRow.getFloat("LATITUD_Y");
    float lng = bikeStationRow.getFloat("LONGITUD_X");
    bikeStation.location = new Location(lat, lng);

    // Add to list of all bike stations
    bikeStations.add(bikeStation);

    // Debug Info
    println("Added " + bikeStation.carrer + " / " + bikeStation.districte );

    // Statistics (well, sort of)
  }

  println("Loaded " + bikeStations.size());
}

void draw() {
  // Draw map and darken it a bit
   background(0);
  mapDetail.draw();
  

  noStroke();

  // Iterate over all bike stations
  for (BikeStation bikeStation : bikeStations) {
    // Convert geo locations to screen positions
    ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
    // Map number of free bikes to radius of circle
    

    // Draw circle according to available bikes
    fill(255, 0, 255, 50);
    ellipse(pos.x, pos.y, 20, 20);

    if (bikeStation.showLabel) {
      fill(200);
      text(bikeStation.carrer, pos.x - textWidth(bikeStation.carrer)/2, pos.y);
    }
  }
}

void mouseClicked() {
  // Simple way of displaying bike station names. Use markers for single station selection.
  for (BikeStation bikeStation : bikeStations) {
    bikeStation.showLabel = false;
    ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
    if (dist(pos.x, pos.y, mouseX, mouseY) < 10) {
      bikeStation.showLabel = true;
    }
  }
}
