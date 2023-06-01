/*
https://p5js.org/es/reference/#/p5.Table
*/

function loadData() {
  const bubbleData = table.getRows();
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  const length = table.getRowCount();

  for (let i = 0; i < length; i++) {
    print("i"+i);
    // Get position, diameter, name,
    //const x = bubbleData[i].getNum("x");
    //const y = bubbleData[i].getNum("y");
    //const diameter = bubbleData[i].getNum("diameter");
    //const name = bubbleData[i].getString("name");

    // Put object in array
    //bubbles.push(new Bubble(x, y, diameter, name));
  }
}
