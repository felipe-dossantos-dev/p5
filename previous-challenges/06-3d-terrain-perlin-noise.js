var cols;
var rows;
var scales = 20;
var w = 900;
var h = 900;
var zNoise = [];
var rOff = 0;
var cOff = 0;
var flying = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scales;
  rows = h / scales;
  for (let r = 0; r <= rows; r++) {
    var newRow = [];
    zNoise.push(newRow);
    for (let c = 0; c <= cols; c++) {
      zNoise[r][c] = map(noise(rOff, cOff), 0, 1, -100, 100);
    }
  }
}

function draw() {
  background(51);
  stroke(255);
  noFill();

  flying -= 0.05;
  rOff = flying;
  for (let r = 0; r <= rows; r++) {
    var cOff = 0;
    for (let c = 0; c <= cols; c++) {
      zNoise[r][c] = map(noise(rOff, cOff), 0, 1, -100, 100);
      cOff += 0.2;
    }
    rOff += 0.2;
  }

  // "mexo a camera" 
  translate(-width / 2 - 200, -height / 4, -50);
  rotateX(PI / 3);
  for (let r = 0; r < rows; r++) {
    beginShape(TRIANGLE_STRIP);
    for (let c = 0; c < cols; c++) {
      vertex(c * scales, r * scales, zNoise[r][c]);
      vertex(c * scales, (r + 1) * scales, zNoise[r + 1][c]);
    }
    endShape();
  }
}