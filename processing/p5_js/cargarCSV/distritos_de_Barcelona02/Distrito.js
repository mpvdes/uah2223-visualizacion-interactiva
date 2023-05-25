//  Clase Distrito
class Distrito {

  //funcion constructora, siempre que reamos una clase tiene que existir, que será a la que se llame cuando se instancie el objeto
  constructor(nombre, codigo) {
   
    //propiedades del objeto.

    this.codigo = codigo;

  
    this.nombre = nombre;
    this.barrios = []; // Barrios que hay en el Distrito

    this.over = false; //variable booleana que solo puede valer si / no, verdadero/falso
     print("NEW DISTRITO: "+nombre +" codigo:"+codigo);
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
    ellipse(this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      fill(0);
      textAlign(CENTER);
      text(this.name, this.x, this.y + this.radius + 20);
    }
  }
}
