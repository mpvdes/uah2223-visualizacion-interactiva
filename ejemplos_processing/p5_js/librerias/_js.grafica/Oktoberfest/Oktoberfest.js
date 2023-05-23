
var table, plot;
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysPerMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function preload() {
  table = loadTable("data/OktoberfestVSGermanElections.csv", "header");
}
function setup() {
  createCanvas(710, 400);
  // Save the table data in two GPointsArrays
  var pointsOktoberfest = [];
  var pointsElections = [];
  for (var row = 0; row < table.getRowCount(); row++) {
    var data = table.getRow(row);
    var year = data.getNum("year");
    var month = data.getNum("month");
    var day = data.getNum("day");
    var date = getExactDate(year, month, day);
    var oktoberfestCount = data.getNum("oktoberfest");
    var electionsCount = data.getNum("bundestagswahl");

    pointsOktoberfest[row] = new GPoint(date, oktoberfestCount, monthNames[month]);
    pointsElections[row] = new GPoint(date, electionsCount, monthNames[month]);
  }
  // Create the plot
  plot = new GPlot(this);
  plot.setDim(700, 300);
  plot.setTitleText("Oktoberfest vs. Bundestagwahl Google search history");
  plot.getXAxis().setAxisLabelText("Year");
  plot.getYAxis().setAxisLabelText("Google normalized searches");
  plot.getXAxis().setNTicks(10);
  plot.setPoints(pointsOktoberfest);
  plot.setLineColor(color(100, 100, 100));
  plot.addLayer("German elections day", pointsElections);
  plot.getLayer("German elections day").setLineColor(color(255, 100, 255));
  plot.activatePointLabels();
}


function draw() {
  background(204, 153, 0);
  // Clean the canvas
   
    // Draw the plot
    plot.beginDraw();
    plot.drawBox();
    plot.drawXAxis();
    plot.drawYAxis();
    plot.drawTitle();
    plot.drawGridLines(GPlot.VERTICAL);
    plot.drawFilledContours(GPlot.HORIZONTAL, 0);
    plot.drawLegend(["Oktoberfest", "Bundestagswahl"], [0.07, 0.22], [0.92, 0.92]);
    plot.drawLabels();
    plot.endDraw();
}
