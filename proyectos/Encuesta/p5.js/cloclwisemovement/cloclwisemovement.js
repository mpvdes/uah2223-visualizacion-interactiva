var sketch = function (p) {
  // Global variables
  var plot, i;
  var step = 0;
  var stepsPerCycle = 31;
  var lastStepTime = 0;
  var clockwise = true;
  var scale = 5;
  var nPoints1;
  var points1 = [];
  // Initial setup
  p.setup = function () {
    // Create the canvas
    var canvas = p.createCanvas(450, 450);

    // Prepare the first set of points
    nPoints1 = stepsPerCycle / 1;


    for (i = 0; i < nPoints1; i++) {
      points1[i] = calculatePoint(1, stepsPerCycle, scale);
      step = (clockwise) ? step + 1 : step - 1;
    }

    lastStepTime = p.millis();

    // Prepare the second set of points
    var nPoints2 = stepsPerCycle + 1;
    var points2 = [];

    for (i = 0; i < nPoints2; i++) {
      points2[i] = calculatePoint(i, stepsPerCycle, 0.9 * scale);
    }

    // Create the plot
    plot = new GPlot(p);
    plot.setPos(25, 25);
    plot.setDim(300, 300);
    // or all in one go
    // plot = new GPlot(p, 25, 25, 300, 300);

    // Set the plot limits (this will fix them)
    plot.setXLim(-1.2 * scale, 1.2 * scale);
    plot.setYLim(-1.2 * scale, 1.2 * scale);

    // Set the plot title and the axis labels
    plot.setTitleText("Clockwise movement");
    plot.getXAxis().setAxisLabelText("x axis");
    plot.getYAxis().setAxisLabelText("y axis");

    // Activate the panning effect
    plot.activatePanning();

    // Add the two set of points to the plot
    plot.setPoints(points1);
    plot.addLayer("surface", points2);

    // Change the second layer line color
    plot.getLayer("surface").setLineColor(p.color(100, 255, 100));
  };

  // Execute the sketch
  p.draw = function () {
    for (i = 0; i < nPoints1; i++) {
      p.line(p.width/2, p.height/2, points1[i].getX(), points1[i].getY());
       p.print("points1[i].getX():"+points1[i].getX());
    }
  };

  p.mouseClicked = function () {
    if (plot.isOverBox(p.mouseX, p.mouseY)) {
      // Change the movement sense
      clockwise = !clockwise;

      if (clockwise) {
        step += plot.getPointsRef().length + 1;
        plot.setTitleText("Clockwise movement");
      } else {
        step -= plot.getPointsRef().length + 1;
        plot.setTitleText("Anti-clockwise movement");
      }
    }
  };

  function calculatePoint(i, n, rad) {
    var delta = 0.1 * p.cos(p.TWO_PI * 10 * i / n);
    var ang = p.TWO_PI * i / n;
    return new GPoint(rad * (1 + delta) * p.sin(ang), rad * (1 + delta) * p.cos(ang));
  }
};

var myp5 = new p5(sketch);
