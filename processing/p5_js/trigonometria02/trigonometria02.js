let radio = 150;
let numItems  =12;
let data = [];

var maxData;
let peso = [10, 20, 1, 34, 56, 89, 90, 10];
let circular =  []; //PVector [state.length];
let loc =  []; //PVector [state.length];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  //datos aleatorios
  for (var i = 0; i < 12; i = i + 1) {
    var randomNumber = random(20, 80);
    data.push(randomNumber);
  }
  maxData = max(data);
  var angleSeparation = 360 / data.length;
  var padding = 10;
}


function draw() {
  fill(139, 171, 203);
  stroke(89, 86, 74);

  var angleSeparation = 360 / data.length;
  var padding = 10;

  if (frameCount <= 400) {
    maxValue = constrain(frameCount * 2, 0, 400);
  } else {
    maxValue = 400;
  }
  var offset = 200;
  var dataMultiplier = (height/2-offset-padding) / maxData;
  for (var i = 0; i < data.length; i = i + 1) {
    push();
    var currentData = data[i];
    var finalHeight = currentData * dataMultiplier;
    var animatedHeight = map(maxValue, 0, 400, 0, finalHeight);
    translate(width / 2, height / 2);
    rotate(angleSeparation * i);
    rect(0, offset, angleSeparation*2, animatedHeight);
    text(Math.floor(currentData), offset-20, 0);
    pop();
  }
}
