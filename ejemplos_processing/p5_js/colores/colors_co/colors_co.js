let url = [
  "https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51",
  "https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557",
  "https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c",
  "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff",
  "https://coolors.co/00e0b0-14213d-fca311-e5e5e5-cf7f3f"
];
function setup() {
  createCanvas(1000, 1000);
  // colorMode(HSB, 360, 100, 100, 100);
}


function draw() {
}

function createPalette(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = color('#' + arr[i]);
  }
  return arr;
}

function mousePressed() {
  let colors = shuffle(createPalette(random(url)));
  drawPiChart(width/2, height/2, 500, 500, random(1.5, 4), width/2 / 4, colors);
}
