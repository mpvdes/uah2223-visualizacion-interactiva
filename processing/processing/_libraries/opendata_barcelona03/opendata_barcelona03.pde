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

String distritoActivo= "barcelona";
String url_districtes = "districtes.csv";
String bna_data = "bcna_clean_location.csv";// in case URL goes down
UnfoldingMap mapDetail;
UnfoldingMap mapOverview;

//String bna_data = "turismo_2022.csv"; // in case URL goes down
String anio = "2022";
Table distritosCSV;
Table dataCSV;
ArrayList<Datas> datas = new ArrayList();
ArrayList<Distrito> al_distritos = new ArrayList();
int maxBikesAvailable = 0;
color color_activo =0;
PImage bkg;

color[] colores = {#f0101c, #f05697, #0b469b, #32b6c3, #f78000, #fddf0e, #9fe063, #315423, #16141b, #43BCCD};
public void setup() {
  size(4961,3508,  P3D);
  surface.setLocation(0, 0);
  bkg=loadImage(imagen);
  dataCSV = loadTable(bna_data, "header, csv");
 
  distritosCSV= loadTable(url_districtes, "header, csv");

  setupMap();
  setupDistrito();
  getAll();
    setupControlP5();
  //  render= new WB_Render3D(this);
  //setupVoronois();
}

public void draw() {
  background(0);
  //mapDetail.updateMap();
  //mapDetail.draw();
  mapDetail.draw();
  // Iterate over all bike stations
  drawPoints();
  //setupVoronois();
  // drawVoronois();
  fill(0);
  textSize(20); 
  String texto = "Num pisos turísticos en Barcelona año:"+anio+": "+datas.size();
  text(texto, width - texto.length()*11, 50);
}
