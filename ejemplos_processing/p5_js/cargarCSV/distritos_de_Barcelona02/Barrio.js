//  Clase Distrito
class Barrio {
  //funcion constructora, siempre que reamos una clase tiene que existir, que será a la que se llame cuando se instancie el objeto
  constructor(nombre, codigoBarri, distritoId) {
    //propiedades del objeto.
    this.nombre = nombre;
    this.codigoBarri = codigoBarri;
    this.distritoID = distritoId;
    this.over = false; //variable booleana que solo puede valer si / no, verdadero/falso
    print("-----NEW BARRIO de "+distritoId+ "nombre "+nombre, "idDistrito"+distritoId);
  }
  //metodo de la clase , funcionalidad
  // Check if mouse is over the bubble
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    this.over = d < this.radius;
  }

  // Display los distritos
  display() {
    stroke(0);
    strokeWeight(0.8);
    noFill();
    ellipse(this.x, this.y, this.codigoBarri, this.codigoBarri);
    if (this.over) {
      fill(0);
      textAlign(CENTER);
      text(this.name, this.x, this.y + this.radius + 20);
    }
  }
}
