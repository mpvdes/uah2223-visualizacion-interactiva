/*
https://p5js.org/es/reference/#/p5.Table
 */
function createPalette(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = color('#' + arr[i]);
  }
  return arr;
}

function loadData() {
  const bubbleData = table.getRows();
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  const numero_filas = table.getRowCount();
  print("numero de filas:"+numero_filas);
  for (let i = 0; i < numero_filas; i++) {
    print("----------i: "+i);
    // Get position, diameter, name,
    //const x = bubbleData[i].getNum("x");
    //const y = bubbleData[i].getNum("y");
    //const diameter = bubbleData[i].getNum("diameter");
    //const name = bubbleData[i].getString("name");

    // Put object in array
    //bubbles.push(new Bubble(x, y, diameter, name));
  }
}
