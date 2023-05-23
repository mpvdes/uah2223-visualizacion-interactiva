/*
--------------------------------------------------------------------------------
 Alba G.Corral  (www.albagcorral.com)
 Septiembre 2007- Deemostracion teorema de pitagoras para dibujar una circunferencia.
 
 --------------------------------------------------------------------------------
 
 */
//import processing.video.*;

//import processing.opengl.*;
PFont font;
//MovieMaker mm;  // Declare MovieMaker object

int radio = 100;
boolean hazFade= false;

int espacio = 50;
int NUM =1; //NUMERO DE CIRCULOS
Circulo[] w = new Circulo[NUM]; //array de cienpies
color colorFade,colorFadeInv;
Circulo circulo ;
int z = 0;
boolean grabamos = false;
void setup() 
{
  frame.setLocation(0,0); 
  smooth();
  background(0);
 // frameRate(20);
  //size(800,600,OPENGL);//UTILIZACION DE los graficos con OPENGL
  size(1920,1080);

  // mm = new MovieMaker(this, width, height, "drawing.mov",  30, MovieMaker.VIDEO, MovieMaker.BEST);
  inicia();

  

}
void Texto(){
  font  = loadFont("Verdana-10.vlw"); 
  textFont(font,10); 
  fill(0);
  String s = "pit�goras 02 - oct 2007 - barcelona - Alba G. Corral.";
  text(s, 10, 10,350,200); 
}

void inicia(){


  for(int i=0;i<NUM;i++) {

    w[i] = new Circulo(int(random(radio)),int(random(espacio)),width/2,height/2); //nuevo circulo

  }  
}
void draw() 
{ 

 
  if (hazFade){
    fade();
  }
  for(int z=0;z<NUM;z++) {


    w[z].draw();//llamamos al metodo de la clase Wurm.draw();
    // ang = ang+ 0.005;
    //rotate(ang);


  }

}

void mousePressed() {
  hazFade =true; 
}
void fade(){
  fill(colorFade,10);
  rect(0,0,width,height);
}

void keyPressed()
{
  if(key == '1') {
    hazFade =!hazFade; 
  } 
  else if(key == '2') {
    colorFade =0;
    colorFadeInv=255;

  } 
  else if(key == '3') {
    colorFade =0;
    colorFadeInv=0;
  }  
  if (key == 'F') {
    //mm.finish();  // Finish the movie if space bar is pressed!
  }
} 
//-----------------------------------------------------------------------------------------------------------------------------------
public void init() {
  //frame.setUndecorated(true); // works.

}
