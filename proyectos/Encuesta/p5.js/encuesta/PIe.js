class Pie {
  constructor(radius, position, easing, vals, col,titulo) {
    print("new PIE");
    //Facilities
    angleMode(DEGREES);
    // colorMode(HSB);

    //Variables you want
    this.titulo = titulo;
    this.radius = radius;
    this.easing = easing;
    this.vals = vals;
    this.col = col;
    this.position = position;

    //Variables program wants
    this.degrees = []; //Values in degrees for each valu in percent
    this.degrees_A=0; //Values in degrees for each valu in percent
    this.degrees_B=0; //Values in degrees for each valu in percent
    this.labels = []; //Values
    let h, s, b;
    this.posLabels = []; // Table of the position of each labels
    this.angles = vals;
    this.angles_A=0;
    this.angles_B=0;
    this.nbSet = vals.length;

    //Set-up
    this.percnt2deg();
    this.parseColor();
    this.label();
  }


  percnt2deg() {
    this.degrees_A = (180*this.vals[0])/100;
    this.degrees_B = (180*this.vals[1])/100;
    print("degrees_A:"+this.degrees_A);
    //Transform percent values in degrees and calculate the position of each label
    /*for(var i=0;i<this.nbSet;i++){
     if(i>=1){
     this.degrees[i] = this.degrees[i-1]+(360*this.vals[i])/100;
     // this.posLabels[i]=(((360*this.vals[i])/100)/2)+(this.degrees[i-1]);
     
     } else {
     
     this.degrees[i] =  (360*this.vals[i])/100;
     }
     }*/
  }

  parseColor() {
    this.h = hue(this.col);
    this.s = saturation(this.col);
    this.b = brightness(this.col);
  }
  label() {
    for (var i=0; i<this.nbSet; i++) {
      this.labels[i]=this.vals[i];
    }
  }
  update() {
    // EASING
    this.angles_A  += (this.degrees_A-this.angles_A)*easing;
    this.angles_B  += (this.degrees_B-this.angles_B)*easing;
    /* for (var i=0; i<this.nbSet; i++) {
     this.angles[i] += (this.degrees[i]-this.angles[i])*easing;
     }*/
  }


  display() {
    textFont("BitstreamVeraSans-Bold-48");
    textAlign(CENTER, CENTER);
    ellipseMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    //-------------------------------------------arco izquierda
    push();
    translate(-2, 0);
    fill(255, 80);
    arc(0, 0, this.radius/2+100, this.radius/2+100, 90, 90+180);
    this.update();
    //fill(255);
    // ellipse(0, 0, this.radius, this.radius);
    fill(colors[1], 255);
    arc(0, 0, this.radius, this.radius, 90, this.angles_A+90);
    
    pop();
    //-------------------------------------------arco derecha
   push();
    translate(2, 0);
    fill(255);
    fill(this.h, this.s, this.b-((this.b/this.nbSet)*i));
    //https://forum.processing.org/two/discussion/21957/how-do-i-flip-an-arc-to-other-way.html
    push();
    scale(-1, 1);//use scale() -- scale(-1,1) to flip horizontally, or scale(1,-1) to flip vertically.
    fill(255, 80);
    arc(0, 0, this.radius/2+100, this.radius/2+100, 90, 180+90);
   
    fill(colors[2], 255);
    arc(0, 0, this.radius, this.radius, 90, 90+this.angles_B);
   
    pop();
    pop();

let poslabelsY = 70;
    //-------------------------------------------resto
    for (var i=this.nbSet; i>=0; i--) {
      var x =i*40-20
        var y =80;
      fill(colors[0]);
      ellipse(0, 0, this.radius/2, this.radius/2);
      fill(colors[3]);
      textSize(this.radius/8);
      text(this.labels[i], x, y+poslabelsY);
      
    }
    text(this.titulo, 0, 0);
      textSize(this.radius/5);
     fill(255, 80);
    text(" | ", 0, 80+poslabelsY);


    pop();
  }



  run() {
    this.display();
  }
}
