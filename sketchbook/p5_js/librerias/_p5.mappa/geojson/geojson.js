let boundary;
let padding = 20;
//https://geojson.io
//https://mits003.github.io/studio_null/2021/11/geojson-with-p5js/
//https://github.com/martgnz/bcn-geodata
function preload(){
    boundary = loadJSON("data/nz.geojson");
   // boundary = loadJSON("data/districtes_barcelona.geojson");
}
function setup(){
    createCanvas(windowHeight, windowHeight);
    background('#67a5da');

    let geom;
    let polygons;
    let coords;
    let features = boundary[0].features;

    fill('#81b214');
    stroke('#fff');
    for (let i = 0; i < features.length; i++) {
        geom = features[i].geometry;
        polygons = geom.coordinates;
        coords = polygons[0];

        beginShape();
        for (let j = 0; j < coords.length; j++) {
            let lon = coords[j][0];
            let lat = coords[j][1];
            let x = map(lon, 160, 180, 0+padding, width-padding);
            let y = map(lat, -50, -30, height-padding, 0+padding);
            vertex(x,y);
        }
        endShape(CLOSE);
    }
}
function draw() {
}
