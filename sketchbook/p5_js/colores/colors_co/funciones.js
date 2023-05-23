function drawPiMeasure(x, y, w, h, step) {
  push();
  translate(x, y);
  let angleStart = random() > 0.5 ? 0 : 360 / step / 2;
  for (let angle = angleStart; angle < 360 + angleStart; angle += 360 / step) {
    let nx1 = cos(angle) * w / 2 * 1.1;
    let ny1 = sin(angle) * h / 2 * 1.1;
    let nx2 = cos(angle) * w / 2 * 1.15;
    let ny2 = sin(angle) * h / 2 * 1.15;
    line(nx1, ny1, nx2, ny2);
  }
  pop();
}

function drawPiChart(x, y, w, h, ratio, off, colors) {
  let n = 0;
  push();
  translate(x + w / 2, y + w / 2);
  scale((min(w, h) - off) / min(w, h));
  rotate(-90);

  drawPiMeasure(0, 0, w, h, int(random([2, 4, 6, 8, 10])));

  let data = createData(2, 6, true, true);
  let sum = 0;
  for (let d of data) {
    sum += d;
  }
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i] / sum * 360;
  }
  let angle = 0;
  for (let d of data) {
    let angleCurrent = d;
    fill(colors[n++ % colors.length]);
    noStroke();
    arc(0, 0, w, h, angle, angle + angleCurrent, PIE);
    angle += angleCurrent;
  }
  pop();
}

function createData(minLength, maxLength, isSort, isReverse) {
  let num = int(random(minLength, maxLength));
  let data = [];
  for (let i = 0; i < num; i++) {
    data.push(random(random()));
  }

  if (random(100) > 50 || isSort != undefined) {
    data.sort();
    if (random(100) > 50 || isReverse != undefined) {
      data.reverse();
    }
  }

  return data;
}
