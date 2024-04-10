function setup() {
  createCanvas(600, 600, P2D);
  background(0);
}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, -2.5, 1.0);
      var b = map(y, 0, height, -1.0, 1.0);
      var ca = a;
      var cb = b;
      var n = 0;
      while (abs(a + b) < 4 && n < 255) {
        var tempA = a * a - b * b + ca;
        b = 2 * a * b + cb;
        a = tempA;
        n++;
      }
      pixels[x + y * width] = color(n * 10 % 255, n * 5 % 255, n * 3 % 255);
    }
  }
  updatePixels();
}