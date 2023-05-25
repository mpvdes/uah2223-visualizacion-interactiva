import wblut.math.*;
import wblut.processing.*;
import wblut.core.*;
import wblut.hemesh.*;
import wblut.geom.*;
import java.util.List;
import janebeta7.*;
import processing.pdf.*;
Boolean isRecord = false;
PGraphicsPDF pdf;
import com.hamoid.*; //videoExport
boolean isFade = false;
int colorr = 255;
List<WB_Point> points ;
List<WB_Point> boundary ;
List<WB_VoronoiCell2D> vors;
WB_Render2D render;
PGraphics pg;
int n;
boolean recording = false;
PImage bkg;
int[] colors;
WB_GeometryFactory gf;
String imagen ="184854_Palau_de_la_Musica_Catalana_f.1.jpg";
//String imagen ="otra.jpg";
PImage mask;

void setup() {
//  fullScreen(1);
 // frameRate(4);
  size(1920, 1080,FX2D);
 
  background(0);


  noCursor();
  n=400;
  int margen = 0;
  bkg=loadImage(imagen);


  boundary =new ArrayList<WB_Point>(4);
  boundary.add(new WB_Point(margen, margen));
  boundary.add(new WB_Point(width-margen, margen));
  boundary.add(new WB_Point(width-margen, height-margen));
  boundary.add(new WB_Point(margen, height-margen));

  render=new WB_Render2D(this);
  gf=WB_GeometryFactory.instance();

  modo1();

  smooth();
  noFill();


  //render= new WB_Render2D(this);
  mask = loadImage("mask2.png");
}



void draw() {
  if (isFade) doFade();

  //background(255);
  //directionalLight(255, 255, 255, map(mouseX,0,width,-1,1), map(mouseY,0,height,-1,1), 1);
  //ambientLight(102, 102, 102);
  // directionalLight(127, 127, 127, -1, -1, 1);
  ///scale(1.5);
  // scale(1.5);


  // background(255);
  /*

   strokeWeight(0.3);
   */

  //strokeWeight(1);


  for (WB_VoronoiCell2D vor : vors) {
    int n=vor.getPolygon().getNumberOfPoints();
    if (vor.getCentroid()!=null) {
      WB_Point p=vor.getCentroid();
      int cell=vor.getIndex();
      WB_Vector v=p.subToVector2D(points.get(cell));
      // v.mulSelf(.01);
      if (keyPressed) {
        points.get(cell).addSelf(random(-3, 3), random(-3, 3), 0);
      }
      points.get(cell).addSelf(v);
     stroke(colorr, 20);

     fill(colors[vor.getIndex()]);
     beginShape(TRIANGLE_STRIP);
      int j=0;
      for (j=0; j<n; j++) {
        p=vor.getPolygon().getPoint(j);
       vertex(p.xf(), p.yf());
        //ellipse(p.xf(), p.yf(),5,5);
      }
      endShape();
    }
  }
  

  // imageMode(CORNER);
  // stroke(0);
  // tint(255,255);
  // blend(pg,0,0, width,height, 0,0,width,height,MULTIPLY);
  // pg.mask(mask);
  /*fill(255,255);
   ellipse(mouseX,mouseY,50,50);
   image(pg,0,0);*/
 

  vors=WB_Voronoi.getClippedVoronoi2D(points, boundary, frameCount*0.6, 1);
 // if ( isRecord ) pdf.nextPage();
}

void mousePressed() {

  //background(255);
  modo2();
}

void modo1() {



  points =new ArrayList<WB_Point>(n);
  colors=new int[n];
  WB_RandomCircle roc=new WB_RandomCircle().setRadius(250);
  for (int i=0; i<n/10; i++) {
    WB_Point p=roc.nextPoint().addSelf(mouseX+random(-5, 5), mouseY+random(-5, 5), 0);//new WB_Point(random(639,641), random(0, height));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    colors[i]=color(red(c), green(c), blue(c), 100);
    points.add(p);
  }

  roc=new WB_RandomCircle().setRadius(81);
  for (int i=n/10; i<n; i++) {
    WB_Point p=roc.nextPoint().addSelf(mouseX+random(-2, 2), mouseY+random(-2, 2), 0);//new WB_Point(random(639,641), random(0, height));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    colors[i]=color(red(c), green(c), blue(c), 100);
    points.add(p);
  }
  frameCount=0;
  vors=WB_Voronoi.getClippedVoronoi2D(points, boundary, 0, 0);
}

void modo2() {

  points =new ArrayList<WB_Point>(n);
  colors=new int[n];


  WB_RandomCircle roc=new WB_RandomCircle().setRadius(random(200));
  for (int i=0; i<n; i++) {
    WB_Point p=roc.nextPoint().addSelf(random(mouseX), mouseY, 0);//new WB_Point(random(639,641), random(0, height));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    colors[i]=color(red(c), green(c), blue(c), 50);
    points.add(p);
  }

  /*roc=new WB_RandomCircle().setRadius(200);
   for (int i=n/2; i<n; i++) {
   WB_Point p=roc.nextPoint().addSelf(width/2+random(-constant, constant), height/2+random(-constant, constant), 0);//new WB_Point(random(639,641), random(0, height));
   int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
   colors[i]=color(red(c), green(c), blue(c), 10);
   points.add(p);
   }*/
  frameCount=0;
}
void modo3() {


  points =new ArrayList<WB_Point>(n);
  colors=new int[n];
  WB_RandomCircle roc=new WB_RandomCircle().setRadius(100);
  for (int i=0; i<n/4; i++) {
    WB_Point p=roc.nextPoint().addSelf(100+random(-1, 1), 100+random(-1, 1), 0);//new WB_Point(random(639,641), random(0, height));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    colors[i]=color(red(c), green(c), blue(c), 250);
    points.add(p);
  }

  roc=new WB_RandomCircle().setRadius(50);
  for (int i=n/4; i<n/4*2; i++) {
    WB_Point p=roc.nextPoint().addSelf(width/2+random(-2, 2), height/2+random(-2, 2), 0);//new WB_Point(random(639,641), random(0, height));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    colors[i]=color(red(c), green(c), blue(c), 250);
    points.add(p);
  }
  roc=new WB_RandomCircle().setRadius(100);
  for (int i=n/4*2; i<n; i++) {
    WB_Point p=roc.nextPoint().addSelf((height/3)*3+random(-2, 2), (height/2)+random(-2, 2), 0);//new WB_Point(random(639,641), random(0, height));
    int c=bkg.pixels[constrain((int)p.yd(), 0, bkg.height-1)*bkg.width+constrain((int)p.xd(), 0, bkg.width-1)];
    colors[i]=color(red(c), green(c), blue(c), 250);
    points.add(p);
  }
  frameCount=0;
  vors=WB_Voronoi.getClippedVoronoi2D(points, boundary, 0, 0);
}
