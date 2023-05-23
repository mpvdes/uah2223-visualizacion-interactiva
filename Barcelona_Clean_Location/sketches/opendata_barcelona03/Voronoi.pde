import wblut.processing.*;
import wblut.geom.*;
import java.util.List;

List<WB_Point> points;
List<WB_VoronoiCell2D> voronoiXY;
int[] colors;
String imagen ="bkg.jpg";
WB_Render3D render;
List<WB_Point> boundary ;
WB_GeometryFactory gf=new WB_GeometryFactory();
int n;



void setupVoronois() {
  int margen = 50;
  colors=new int[datas.size()];
  boundary =new ArrayList<WB_Point>(4);
  boundary.add(new WB_Point(-margen, -margen));
  boundary.add(new WB_Point(width+margen, -margen));
  boundary.add(new WB_Point(width+margen, height+margen));
  boundary.add(new WB_Point(-margen, height+margen));
  points=new ArrayList<WB_Point>();
  int cont = 0;
  for (Datas bikeStation : datas) {
    // Convert geo locations to

    ScreenPosition pos = mapDetail.getScreenPosition(bikeStation.location);
    Boolean isHit = mapDetail.isHit(pos.x, pos.y);

    if (isHit) points.add(new WB_Point(pos.x, pos.y, 0));
    int c=bkg.pixels[constrain((int)pos.x, 0, bkg.height-1)*bkg.width+constrain((int)pos.x, 0, bkg.width-1)];
    colors[cont]=color(red(c), green(c), blue(c), 250);

    fill(bikeStation.colorr);
    cont++;
  }

  // createBoundaryPolygon();
  voronoiXY=WB_Voronoi.getClippedVoronoi2D(points, boundary, 0, 0);

  //voronoiXY= WB_Voronoi.getVoronoi2D(points, 2);
  //voronoiXY= WB_Voronoi.getClippedVoronoi2D(points, boundary,2);
  
}

void drawVoronois() {



  //ellipse(random(width),random(height),10,10);
  noFill();
  //fill(color_activo, 100);
  stroke(255);
  strokeWeight(2);
  render.drawPoint(points, 1); 
  strokeWeight(1);
  for (WB_VoronoiCell2D vor : voronoiXY) {
    int n=vor.getPolygon().getNumberOfPoints();
    if (vor.getCentroid()!=null) {
      WB_Point p=vor.getCentroid();
      int cell=vor.getIndex();
      WB_Vector v=p.subToVector2D(points.get(cell));
      v.mulSelf(.1);
      points.get(cell).addSelf(v);
      stroke(255, 100);
      //noStroke();
      fill(colors[vor.getIndex()]);
      beginShape(TRIANGLE_FAN);
      int j=0;
      for (j=0; j<n; j++) {
        p=vor.getPolygon().getPoint(j);
        vertex(p.xf(), p.yf());
      }
      endShape();
    }
  }
  /*for (WB_VoronoiCell2D vor : voronoiXY) {
    int n=vor.getPolygon().getNumberOfPoints();
    render.drawPolygonEdges(vor.getPolygon());
  }*/
  // render.drawPolygon2D(boundary);
   voronoiXY=WB_Voronoi.getClippedVoronoi2D(points, boundary, frameCount*0.20, 1);
  // voronoiXY=WB_Voronoi.getClippedVoronoi2D(points, boundary, 2);
}
