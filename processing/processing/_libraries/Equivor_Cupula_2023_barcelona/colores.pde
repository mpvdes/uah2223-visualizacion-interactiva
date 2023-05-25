//String colores_s = "https://coolors.co/a0ecd0-e26d5a";



String colores_s = "https://coolors.co/d6fff6-e80707";
//String colores_s = "https://coolors.co/ccd5ae-cd8987-fefae0-faedcd-d4a373";
//String colores_s = "https://coolors.co/466365-b49a67";

//https://coolors.co/a0ecd0-084b83
color[] pal;
color[] colores;
color pallete;
//https://behreajj.medium.com/color-gradients-in-processing-v-2-0-e5c0b87cdfd2
void setupColores(){
pal = createPallete(colores_s);
}

color[] createPallete(String colors) {
  String[] clrs = splitTokens(colors, "/");
  String[] c = splitTokens(clrs[2], "-");
  //String[] a = new String[c.length];
  color[] col = new color[c.length];

  for (int i = 0; i < c.length; i++) {
    //println(c[i]);
    //a[i] = "#"+c[i];
    col[i] = col[i] = unhex("FF" + c[i]); 
  }
  return col;
}

class Colores{
  color colorr;
  int id_point;
  color stroke;
  color num_pisos;
 Colores(color _colorr,color _stroke,int _num_pisos, int _idpoint){
   stroke = _stroke;
   colorr = _colorr;
   id_point = _idpoint;
   num_pisos =_num_pisos ;
 }
 color getColor(){
 return colorr;
 }
 color getStroke(){
 return stroke;
 }
}
