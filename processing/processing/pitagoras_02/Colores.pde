class Colores{
  PImage img;
  String[] palettes;
  public color[] imageColors;
  public  color[] colores = new color[4];

  //constructor
  Colores(){
    setupPalettes();
    initPalette();
  }
  void setupPalettes(){

    palettes = new String[6];
    palettes[0] ="Central_Park.png" ;
    palettes[1] ="China_Doll.png" ;
    palettes[2] ="Chocolate_+_Flowers.png";
    palettes[3] ="lamp_peel.png";
    palettes[4] ="Peanut_Butter_Cup.png";  
    palettes[5] ="vision_of_division..png";   
  }

  /////////////////// PUBLIC //////////////////////////////////////////////////
  public void initPalette(){

    int p = int(random(palettes.length));
    img = loadImage(palettes[0]);
    println("ACTUALIZA PALETA A: "+palettes[p]);
    imageColors = new color[img.width*img.height];
    for (int y = 0; y < img.height; y++) {
      for (int x = 0; x < img.width; x++) {
        imageColors[y*img.height + x] = img.get(x, y);
      }
    }
  }
  //funcion que devuelve colores aleatorios de la paleta cargada dinamicamente
  public color devuelveColores(){
    int r = int(random(imageColors.length));//color de la paleta actualmente cargada aleatorio
    return imageColors[r];
  }
}
