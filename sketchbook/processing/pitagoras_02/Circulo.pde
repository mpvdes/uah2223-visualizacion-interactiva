
class Circulo {
  //


  float a = 0.0  ;
  float inc = TWO_PI/240;
  int longitud = 100;
  boolean dibujado= false; 
  int radio,radioini,Ax,Ay,espacio;
  color colorr;
  Colores colores= new Colores(); 



  //constructor de la clase
  Circulo (int _radio,int _espacio,int _Ax,int _Ay) {
    this.radioini = radio;
    this.radio = _radio;
    this.Ax = _Ax;
    this.Ay =_Ay;
    this.espacio = _espacio;

    this.colorr = colores.devuelveColores();
  }
  void draw() {
    //variante while dibuja de golpe
    while (a <  TWO_PI){
      dibuja();
      a = a + inc;
    }

  println("-------------------------radio:"+radio);
    a =0;
    radio = radio+1;
   

    if (radio > 800) {
      dibujado = true;
       background(255);
       a = 0;
       radio =radioini;
       colores.initPalette();
    }
  }

  void dibuja(){

    // strokeWeight(1); 
    //    ahora recorremos la longitud de r para ir creando puntos que recorran todo el areadel circulo
    for (int i = 0; i < radio; i = i+100) {

      colorr = colores.devuelveColores();
      float xx = cos(a)*i+Ax; 
      float yy = sin(a)*i+Ay; 
      float xx2 = cos(a)*(i+int(random(100)))+Ax; 
      float yy2 = sin(a)*(i+int(random(100)))+Ay; 
      stroke(255,30);
      strokeWeight(1);
      noFill();
      float cx1 =  xx+int(random(20));
      float cx2 = xx2+int(random(20));
      float cy1 = yy+int(random(20));
      float cy2 = yy2+int(random(20));

      bezier(xx, yy, cx1, cy1, cx2, cy2, xx2, yy2);


    }

  }

}
