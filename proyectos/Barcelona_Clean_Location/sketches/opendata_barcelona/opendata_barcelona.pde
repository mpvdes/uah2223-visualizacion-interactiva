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
import de.fhpotsdam.unfolding.providers.*;
import controlP5.*;
import java.util.*;


ControlP5 cp5;

UnfoldingMap mapDetail;
UnfoldingMap mapOverview;
String bikeFile = "turismo_2022.csv"; // in case URL goes down
//String bikeFile = "turismo_2022.csv"; // in case URL goes down
String anio = "2022";
Table table;
Table bikeDataCSV;
ArrayList<BikeStation> bikeStations = new ArrayList();
int maxBikesAvailable = 0;
color color_activo =0;
String[] a_distritos = {"CIUTAT VELLA", "SANTS-MONTJUÏC", "LES CORTS", "NOU BARRIS", "SANT ANDREU", "SANT MARTI", "L'EIXAMPLE", "GRACIA", "HORTA-GUINARDÓ", "SARRIA-SANT GERVASI"};
Distrito[] o_distritos ;
PImage bkg;
color[] colores = {#f0101c, #f05697, #0b469b, #32b6c3, #f78000, #fddf0e, #9fe063, #315423, #16141b, #43BCCD};
public void setup() {
  size(1920, 1080, P3D);
  bkg=loadImage(imagen);
  o_distritos = new Distrito[a_distritos.length];
  for (int i = 0; i < a_distritos.length; i = i+1) {
    o_distritos[i] = new Distrito(i, a_distritos[i], colores[i]);
    println("-----i:" +i + " +o_distritos.nombre:"+o_distritos[i].nombre +" color:"+ hex(o_distritos[i].colorr));
  }

  cp5 = new ControlP5(this);
  List l = Arrays.asList(a_distritos);
  /* add a ScrollableList, by default it behaves like a DropdownList */
  cp5.addScrollableList("dropdown")
    .setPosition(50, 50)
    .setSize(200, 100)
    .setBarHeight(20)
    .setItemHeight(20)
    .addItems(l)
    // .setType(ScrollableList.LIST) // currently supported DROPDOWN and LIST
    ;
  cp5.addBang("reset")
    .setPosition(300, 50)
    .setSize(100, 40)
    .setTriggerEvent(Bang.RELEASE)
    .setLabel("reset")
    ;



  // mapDetail = new UnfoldingMap(this, 0, 0, width, height, new StamenMapProvider.WaterColor());
  mapDetail = new UnfoldingMap(this, 0, 0, width, height);
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

  bikeDataCSV = loadTable(bikeFile, "header, csv");
  getAll();
  render= new WB_Render3D(this);
  //ssetupVoronois();
  //println("Loaded " + bikeStations.size());
 
}

public void draw() {
  //
  //println("isTweening:"+mapDetail.isTweening());
   background(0);
//mapDetail.updateMap();
  //mapDetail.draw();
   mapDetail.draw();
  // Iterate over all bike stations
  drawPoints();
 setupVoronois();
  drawVoronois();
  fill(0);
  textSize(20); 
  String texto = "Num pisos turísticos en Barcelona año:"+anio+": "+bikeStations.size();
  text(texto, width - texto.length()*11, height-50);
}
