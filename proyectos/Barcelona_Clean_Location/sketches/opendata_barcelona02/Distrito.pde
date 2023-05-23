// Class to store data for each bike station
class Distrito {


  String nombre;
  int id;
  color colorr;
  Location location;

  Distrito(int _id, String _nombre, color _colorr) {
    this.nombre=_nombre;
    this.id= _id;
    this.colorr = _colorr;
  }
  
  color getColor(){
    return colorr;
  }
  
}
