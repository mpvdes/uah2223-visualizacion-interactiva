import wblut.math.*;
import wblut.processing.*;
import wblut.core.*;
import wblut.hemesh.*;
import wblut.geom.*;
import java.util.List;
import janebeta7.*;
import peasy.PeasyCam;

/* tipos de color:
 CON LICENCIA
 SIN LICENCIA EN AIRBNB
 MAS DE UN PISO
 EXENTO
 https://coolors.co/a0ecd0-041b15-136f63-d7b49e
 fill(0xFF000000+pallete);
 */

PeasyCam cam;
VideoExport videoExport;
import com.hamoid.*; //videoExport


//String url_name = "export_EIXAMPLE.txt";
String url_name = "export_CIUTAT VELLA.txt";
boolean isFade = false;
int colorr = 255;
List<WB_Point> points ;

ArrayList<Colores> coloress = new ArrayList<Colores>();
List<WB_Point> boundary ;
List<WB_VoronoiCell2D> vors;
WB_Render3D render;
int n;
boolean recording = false;
PImage bkg;
int[] colors;
WB_GeometryFactory gf;
int margen= 10;
String imagen ="otra.jpg";
PGraphics pg;

void setup() {
  frameRate(160);
  // translate(width/2,height/2);
  size(4961, 3508, P3D);
  surface.setLocation(0, 0);
  // cam = new PeasyCam(this, 1500);
  pg = createGraphics(width, height);
  setupColores();
  n=10000;
  videoExport = new VideoExport(this, getIncrementalFilename("videoout/"+getClass().getSimpleName()+"###.mp4"));
  videoExport.setFrameRate(60);
  boundary =new ArrayList<WB_Point>(4);
  boundary.add(new WB_Point(-margen, -margen));
  boundary.add(new WB_Point(width+margen, -margen));
  boundary.add(new WB_Point(width+margen, height+margen));
  boundary.add(new WB_Point(-margen, height+margen));

  render=new WB_Render3D(this);
  gf=WB_GeometryFactory.instance();

  reset();

  smooth();
  noFill();

  background(255);
  render= new WB_Render3D(this);
}

void draw() {
  if (isFade) doFade();
  //background(255);
// lights();
 directionalLight(255, 255, 255, 1, 1, -1);
  // directionalLight(255, 255, 255, -1, -1, 1);


  display();
  if (recording) {
    videoExport.saveFrame();
  }
  //tint(255);
 // image(pg, 0, 0, width, height);
}
void reset() {
  //modo_mouse();
  modo_import();
}
void modo_import() {
  bkg=loadImage(imagen);
  points =new ArrayList<WB_Point>(n);
  colors=new int[n];
  // Open the file from the createWriter() example
  BufferedReader reader = createReader(url_name);
  String line = null;
  int cont=0;

  pg.beginDraw();
  try {
    WB_RandomCircle roc=new WB_RandomCircle().setRadius(100);
    while ((line = reader.readLine()) != null) {
      String[] pieces = split(line, TAB);
      int x = int(pieces[0]);
      int y = int(pieces[1]);
      int num_pisos = int(pieces[2]); 
      int tipo = int(pieces[3]); 
      // WB_Point p=roc.nextPoint().addSelf(mouseX+random(-1, 1), mouseY+random(-1, 1), 0);//
    WB_Point p=roc.nextPoint().addSelf(x, y, 0);//new WB_Point(random(639,641), random(0, height));
 
     // WB_Point p = new WB_Point(x, y);
      //int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
      // colors[i]=color(0, 0, random(0,255), 255);
      //colors[cont]=color(red(c), green(c), blue(c), 255);
      points.add(p);
      pg.stroke(0);
      pg.fill(255);
      pg.ellipse(x, y, 5, 5);
      // pallete =pal[int(random(pal.length))];

      color stroke;
      color fill = color(255, 0, 0);

      if ( (tipo == 0) || (tipo == 1)) {  //nulos-ilegales 
        stroke=0;
        fill=#8B4513;
      } else if ((tipo == 3 &&  num_pisos >= 15)|| (tipo == 2 &&  num_pisos >= 15)) { //MULTIPISOS
        /* stroke =pal[0];  
         fill=pal[0];*/
        stroke  =#DAA520 ;  
        fill  =0;
      } else if ((tipo == 2 &&  num_pisos < 15) || (tipo == 3 &&  num_pisos < 15)) {//LEGALES
        stroke =#FAFAD2;  
        fill=0;
      } else { 
        println("num_pisos:"+num_pisos);
        stroke= color(255, 0, 0);
      }

      // stroke = 255;
      //stroke= 0;
      Colores col = new Colores(fill, stroke, num_pisos, cont);
      coloress.add(col);
      cont++;
    }
    pg.endDraw();
    frameCount=0;
    vors=WB_Voronoi.getClippedVoronoi2D(points, boundary, 0, 0);
    reader.close();
  } 
  catch (IOException e) {
    e.printStackTrace();
  }
}

void modo_mouse() {
  bkg=loadImage(imagen);
  points =new ArrayList<WB_Point>(n);
  colors=new int[n];
  WB_RandomCircle roc=new WB_RandomCircle().setRadius(1250);
  for (int i=0; i<100; i++) {
    // WB_Point p=roc.nextPoint().addSelf(mouseX+random(-1, 1), mouseY+random(-1, 1), 0);//
    WB_Point p = new WB_Point(random(0, width), random(0, 700));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    // colors[i]=color(0, 0, random(0,255), 255);
    colors[i]=color(red(c), green(c), blue(c), 255);
    points.add(p);
  }
  frameCount=0;
  vors=WB_Voronoi.getClippedVoronoi2D(points, boundary, 0, 0);
}
