/*---------------------------------teclado----------------------------------*/
void keyPressed() {


  println(java.awt.event.KeyEvent.getKeyText(keyCode));
  String tecla = java.awt.event.KeyEvent.getKeyText(keyCode);
  println("tecla: "+tecla);


  if (keyPressed) {
    switch (key) {
    case 'w': case 'W':
      colorr = 255;

      break;
    case 'q':case 'Q':
      colorr = 0;

      break;
    case '3':
      modo3();

      break;
    case '2':
      modo2();

      break; 
    case '1':
      modo1();

      break; 
    case 's':case 'S':
      salvarImagen();

      break; 
    case 'f':
    case 'F':
      isFade = !isFade;
      println("isFade:"+isFade);

      break; 
    case 'v':case 'V':
      recording  =!recording;
      println("recording:"+recording);

      //presets[20].listener();
      break;
    case 'x':case 'X':
      background(255);
       String nombre = getIncrementalFilename("out/"+getClass().getSimpleName()+"###.pdf");
      pdf = (PGraphicsPDF)beginRecord(PDF, nombre);
      println("begin record: "+nombre);
      break;
      
    case 'n':case 'N':
       pdf.nextPage();
      break;
    case 'd':case 'D':
      endRecord();
        println("endRecord");
      exit();
      break;
    }
  }
}
