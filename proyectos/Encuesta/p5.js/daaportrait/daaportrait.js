dy=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
color1 = ['#f2d9dc','#f2b84b','#f28e13','#f27405','#f2d9dc','#f2b84b','#f28e13','#f27405']
pc1 = [50,35,18,40,30, 80, 24, 76]

color2 = ['#485947','#e8ffa8','#eod771','#f78831','#e84d2f','#485947','#e8ffa8','#eod771']
pc2 = [10,19,08,40,30, 07, 64, 16]

color3 = ['#f20723','#0c1d40','#1d4s73','#8fcbd9','#dad9d9','#f20723','#0c1d40','#1d4s73']
pc3 = [10,30,30,10,20, 19, 12, 03]

color4 = ['#9ac2be','#f2e3bg','#f2c299','#793489','#f2935c','#f21b6','#097035','#750409']
pc4 = [10,30,30,10,20, 19, 12, 03]

color5 = ['#0c70f2','#3b7fd9','#f2b705','#f2d888','#d2f2dd','#900432','#097035','#900009']
pc5 = [10,30,30,10,20, 19, 12, 03]


let xo

function setup() {
  createCanvas(600, 600);
  
  xo=0
  
  
  
}

function draw() {
  
  background(220);
  
  for (let i = 0; i < 8; i++) { 
    let radios = 380+noise(xo,i)*20
    
    
    
        fill (color5[i])
    arc(300, 300, radios*(pc1[i]+pc2[i]+pc3[i]+pc4[i]+pc5[i])/100, radios*(pc1[i]+pc2[i]+pc3[i]+pc4[i]+pc5[i])/100, QUARTER_PI*i, QUARTER_PI*(i+1));
    
    
    fill (color4[i])
    arc(300, 300, radios*(pc1[i]+pc2[i]+pc3[i]+pc4[i])/100, radios*(pc1[i]+pc2[i]+pc3[i]+pc4[i])/100, QUARTER_PI*i, QUARTER_PI*(i+1));
    
    
      fill (color3[i])
    arc(300, 300, radios*(pc1[i]+pc2[i]+pc3[i])/100, radios*(pc1[i]+pc2[i]+pc3[i])/100, QUARTER_PI*i, QUARTER_PI*(i+1));
    
    
     fill (color2[i])
    arc(300, 300, radios*(pc1[i]+pc2[i])/100, radios*(pc1[i]+pc2[i])/100, QUARTER_PI*i, QUARTER_PI*(i+1));
    
    
  fill (color1[i])
    arc(300, 300, radios*pc1[i]/100, radios*pc1[i]/100, QUARTER_PI*i, QUARTER_PI*(i+1));
   fill (color5[i])
   translate(width/2, height/2)
    rotate(HALF_PI+QUARTER_PI*(i)+PI/8)
    textAlign(CENTER)
    
    strokeWeight(0);
   textSize(30);
   textStyle(NORMAL);
    
    text(dy[i],0,-radios*(pc1[i]+pc2[i]+pc3[i]+pc4[i]+pc5[i])/200)
    rotate(-HALF_PI-QUARTER_PI*(i)-PI/8)
    translate(-width/2, -height/2)
    
  }
  
   xo += 0.04
  
}
