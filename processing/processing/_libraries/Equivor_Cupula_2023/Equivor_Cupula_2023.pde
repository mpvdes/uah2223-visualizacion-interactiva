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



String url_name = "export_barcelona.txt";
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
int margen= 500;
String imagen ="otra.jpg";
  PGraphics pg;
   
void setup() {
  size(3840, 2160, P3D); //dimensiones reales de la cúpula
  //cam = new PeasyCam(this, 400);
  pg = createGraphics(width,height);
  setupColores();
  n=10000;
  videoExport = new VideoExport(this, getIncrementalFilename("videoout/"+getClass().getSimpleName()+"###.mp4"));
  videoExport.setFrameRate(30);
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
  directionalLight(255, 255, 255, 1, 1, -1);
  //directionalLight(255, 0, 0, -1, -1, 1);


  display();
  if (recording) {
    videoExport.saveFrame();
  }
  image(pg,0,0,width,height);
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
    while ((line = reader.readLine()) != null) {
      String[] pieces = split(line, TAB);
      int x = int(pieces[0]);
      int y = int(pieces[1]);
      int num_pisos = int(pieces[2]); 
      int tipo = int(pieces[3]); 
      // WB_Point p=roc.nextPoint().addSelf(mouseX+random(-1, 1), mouseY+random(-1, 1), 0);//
      WB_Point p = new WB_Point(x, y);
      int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
      // colors[i]=color(0, 0, random(0,255), 255);
      colors[cont]=color(red(c), green(c), blue(c), 255);
      points.add(p);
      pg.stroke(0);
      pg.fill(0);
      pg.ellipse(x, y, 5, 5);
      pallete =pal[int(random(pal.length))];

      color stroke;
      color fill = color(255,0,0);

      if (tipo == 0) {
        stroke=0;  //nulos-ilegales
        fill=0;
        //stroke= 255;
     
      } else if (tipo == 1) {
        stroke= 0;  //exentos ilegales
        fill=0;
      } else if (tipo == 2) {
        stroke = pal[0];  //exentos legales
        fill=pal[1];
      } else if (tipo == 3) { 
        stroke = 255;  //con licencia
        fill=255;
      } else { 
        stroke= color(255, 0, 0);
      }
      /*
      } else if (tipo == 1) {
        stroke= 0;  //exentos ilegales
        fill=0;
      } else if (tipo == 2) {
        stroke = pal[0];  //exentos legales
        fill=pal[1];
      } else if (tipo == 3) { 
        stroke = 255;  //con licencia
        fill=255;
      } else { 
        stroke= color(255, 0, 0);
      }*/
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
  WB_RandomCircle roc=new WB_RandomCircle().setRadius(250);
  for (int i=0; i<1500; i++) {
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
