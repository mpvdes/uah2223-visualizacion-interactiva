
// Accidente class
const Accidente = function (lat, lng, size) {
  this.origin = createVector(random(0, w) , h + random(500,1000));
  this.destination =  createVector(0, 0);
  this.size = map(size, 558, 60000000, 3, 25);
  this.lat = lat;
  this.lng = lng;
  this.delta = 0;
  this.trail = [];
};

Accidente.prototype.run = function() {
  this.update();
  this.showTrail();
  this.display();
};

Accidente.prototype.update = function(){
  this.pixelPos = myMap.latLngToPixel(this.lat, this.lng);
  this.destination.x = this.pixelPos.x;
  this.destination.y = this.pixelPos.y;
  this.position = this.origin.lerp(this.destination, this.delta); 
  this.delta > 0.15 ? this.delta += 0.05 : this.delta += 0.001;
};

Accidente.prototype.display = function() {
  strokeWeight(5);
  fill(orange);
  ellipse(this.position.x, this.position.y, this.size, this.size);
};

Accidente.prototype.showTrail = function(){
  this.trail.push(this.position.copy())
  this.trail.length > 10 && (this.trail.splice(0, 1));
  for(var i = 0; i < this.trail.length; i++){
      var pos = this.trail[i];
      fill(255, 170, 37, 100);
      ellipse(pos.x, pos.y, this.size, this.size);
  }
}

Accidente.prototype.landed = function(){
  if (this.delta > 1) {
    // Explossion
    for(var e = 20; e > 1; e--){
      fill(lerpColor(orange, white, e/11));
      ellipse(this.position.x, this.position.y, this.size + e/2 , this.size + e/2);
    }
    return true;
  } else {
    return false;
  }
};

var AccidenteSystem = function() {
  this.Accidentes = [];
  this.landedAccidentes = [];
};

AccidenteSystem.prototype.addAccidente = function(lat, lng, size) {
  this.Accidentes.push(new Accidente(lat, lng, size));
};

AccidenteSystem.prototype.showLanded = function(lat, lng, size) {
  this.landedAccidentes.forEach(function(Accidente){
    var p = myMap.latLngToPixel(Accidente[0], Accidente[1]);
    fill(255, 170, 37, 100);
    ellipse(p.x, p.y, Accidente[2], Accidente[2]);
  })
};

AccidenteSystem.prototype.destroyTheEarth = function() {
  for (var i = this.Accidentes.length - 1; i >= 0; i--) {
    var m = this.Accidentes[i];
    m.run();
   if (m.landed()) {
     // this.landedAccidentes.push([m.lat, m.lng, m.size]);
      //this.Accidentes.splice(i, 1);
    }
  }
};
