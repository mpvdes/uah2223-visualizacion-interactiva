/*
 * @name Load Saved Table
 * @arialabel Four white circles with labels
 * @description Create a Bubble class, instantiate multiple bubbles using data from
 * a csv file, and display results on the screen.
 *  Because the web browsers differ in where they save files, we do not make use of
 *
 * Based on Daniel Shiffman's <a href="https://processing.org/examples/loadsavetable.html">LoadSaveTable Example</a> for Processing.
 */


let table; // Global object to hold results from the loadTable call
let provincias = []; // Global array to hold all bubble objects
let comunidades = []; // Global array to hold all bubble objects
let estados = [];
// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
  table = loadTable("data/totales_escrutinio_4_301.csv", "header");
}

// Convert saved Bubble data into Bubble Objects
function loadData() {
  const datas = table.getRows();

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  const length = table.getRowCount();

  for (let i = 0; i < length; i++) {
    // Get position, diameter, name,
    const codigoComunidad =  datas[i].getNum(2);
    const codigoProvincia =  datas[i].getNum(3);
    const nombre =  datas[i].getString(5)
   // const nombre = datas[i].getNum(5);
    
    if ( codigoComunidad == 99 && codigoProvincia == 99)
    {
     
        print("codigoComunidad:"+codigoComunidad+ " codigoProvincia"+codigoProvincia+ " nombre:"+nombre);
  
      // separaremos EStado / Comunidad / Provincia
      // es estado?  [3] == 99 && [4] == 99
      estados.push(new Votos(nombre,datas[i].getNum(6),datas[i].getNum(7),datas[i].getNum(8),datas[i].getNum(9),datas[i].getNum(10),datas[i].getNum(11),datas[i].getNum(12),datas[i].getNum(13),datas[i].getNum(14),datas[i].getNum(15),datas[i].getNum(16),datas[i].getNum(17),datas[i].getNum(18)));
    }
    // Put object in array
    // bubbles.push(new Bubble(x, y, diameter, name));
  }
}

// Create a new Bubble each time the mouse is clicked.
function mousePressed() {
}

function setup() {
  createCanvas(640, 360);
  loadData();
}

function draw() {
  background(255);

  // Display all bubbles
  /* for (let i = 0; i < bubbles.length; i++) {
   bubbles[i].display();
   bubbles[i].rollover(mouseX, mouseY);
   }*/

  // Label directions at bottom
  textAlign(LEFT);
  fill(0);
  text("Click to add bubbles.", 10, height - 10);
}
