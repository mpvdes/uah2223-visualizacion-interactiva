function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(144)
  const radiusOfPolygon = 82;
  const numberPolygonCoorners = 4;
  const [xCoordPolygon, yCoordPolygon] = polygon(400, 260, radiusOfPolygon, numberPolygonCoorners);
  let isInsidePolygon = pointInPolygon(xCoordPolygon, yCoordPolygon, numberPolygonCoorners, mouseX, mouseY);
  if (isInsidePolygon) {
    fill("green");
  } else {
    fill("red");
  }
}

// Plot a Polygon
function polygon(x, y, radius, npoints) {
  let yCoordPolygon = [];
  let xCoordPolygon = [];
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    xCoordPolygon.push(sx);
    let sy = y + sin(a) * radius;
    yCoordPolygon.push(sy);
    vertex(sx, sy);
    //curveVertex(sx, sy);
  }
  endShape(CLOSE);
  return [xCoordPolygon, yCoordPolygon];
}

// Check if a point is inside a Polygon
function pointInPolygon(horizontalCoordCorners, vericalCoordCorners, numberPolygonCoorners, xCoord, yCoord) {
  let oddNodes = false;
  let j = numberPolygonCoorners - 1;
  for (i = 0; i < numberPolygonCoorners; i++) {
    if (vericalCoordCorners[i] < yCoord && vericalCoordCorners[j] >= yCoord || vericalCoordCorners[j] < yCoord && vericalCoordCorners[i] >= yCoord) {
      if (horizontalCoordCorners[i] + (yCoord - vericalCoordCorners[i]) / (vericalCoordCorners[j] - vericalCoordCorners[i]) * (horizontalCoordCorners[j] - horizontalCoordCorners[i]) < xCoord) {
        oddNodes = !oddNodes;
      }
    }
    j = i;
  }
  return oddNodes;
};
