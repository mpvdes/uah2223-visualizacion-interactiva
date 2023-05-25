void display() {
  for (WB_VoronoiCell2D vor : vors) {
    int n=vor.getPolygon().getNumberOfPoints();
  
    if (vor.getCentroid()!=null) {
      WB_Point p=vor.getCentroid();
      int cell=vor.getIndex();
      WB_Vector v=p.subToVector2D(points.get(cell));
      v.mulSelf(.1);
      fill(255);
     // ellipse(p.xf(),p.yf(),2,2);
      points.get(cell).addSelf(v);
      Colores c = coloress.get(cell);
      // if (c.num_pisos>10) stroke(c.getStroke(), 30); else  noStroke();
      stroke(c.getStroke(), 30);
      //noStroke();
      //float stroke = map(c.num_pisos,0,165,50,255);
    
      fill(c.getColor(),100);

      beginShape(TRIANGLE_STRIP);
      int j=0;
      for (j=0; j<n; j++) {
        p=vor.getPolygon().getPoint(j);
        vertex(p.xf(), p.yf());
      }
      endShape();
      fill(0);
      ellipse(p.xf(),p.yf(),5,5);
    }
  }
  

  vors=WB_Voronoi.getClippedVoronoi2D(points, boundary, frameCount*0.10,0);
    // render.drawPoint(vors, 1);
}
