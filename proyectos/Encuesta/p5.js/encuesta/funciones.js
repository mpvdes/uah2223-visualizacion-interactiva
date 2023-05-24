
function init() {
  unit = width/4;
  colors = createPalette(url[0]);
  //colors = shuffle(createPalette(random(url)))
  noStroke();
  let wideCount = 3;
  let highCount = 2;
  let spaceY=100;
  let spaceX=40;
  let margenY = 200;
  let margenX = 50;
  count = wideCount * highCount;
  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      let posX = (x* unit+unit/2+spaceX*x)+margenX;
      let posY = (y* unit+unit/2+spaceY*y)+margenY;
      pies[index++] = new Pie(210, createVector(posX, posY), easing/3, [10, 60], color(58, 86, 80), "Texto");
    }
  }
}
