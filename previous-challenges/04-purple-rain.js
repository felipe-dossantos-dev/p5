class Drop {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.x = random(-100, width + 100);
    this.y = random(-1.5 * height, 0);
    // z = 0 muito perto e z = 20 muito longe
    // maiorres e mais claros na frente
    // menores e mais escuros lah para tras
    // mais gotas na parte de tras que na frente
    this.z = random([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9]); 
    this.yspeed = map(this.z, 0, 9, 11, 9);
    this.rotate = map(this.z, 0, 9, -0.1, -0.05);
    this.dropSize = map(this.z, 0, 9, 15, 3);
    this.thick = map(this.z, 0, 9, 1.5, 0.1);
    let alphaColor = map(this.z, 0, 9, 170, 255);
    this.color = color(138, 43, 226, alphaColor);
  }

  fall() {
    this.y += this.yspeed;
    if (this.y > height) {
      this.initialize()
    }
  }

  show() {
    push()
    stroke(this.color)
    strokeWeight(this.thick)
    rotate(this.rotate)
    line(this.x, this.y, this.x, this.y + this.dropSize);
    pop()
  }
}

var drops = []

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 300; i++) {
    drops.push(new Drop())
  }
}

function draw() {
  background(230, 230, 250);
  for (const drop of drops) {
    drop.fall()
    drop.show()
  }
}
class Drop {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.x = random(-100, width + 100);
    this.y = random(-1.5 * height, 0);
    // z = 0 muito perto e z = 20 muito longe
    // maiorres e mais claros na frente
    // menores e mais escuros lah para tras
    // mais gotas na parte de tras que na frente
    this.z = random([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9]); 
    this.yspeed = map(this.z, 0, 9, 11, 9);
    this.rotate = map(this.z, 0, 9, -0.1, -0.05);
    this.dropSize = map(this.z, 0, 9, 15, 3);
    this.thick = map(this.z, 0, 9, 1.5, 0.1);
    let alphaColor = map(this.z, 0, 9, 170, 255);
    this.color = color(138, 43, 226, alphaColor);
  }

  fall() {
    this.y += this.yspeed;
    if (this.y > height) {
      this.initialize()
    }
  }

  show() {
    push()
    stroke(this.color)
    strokeWeight(this.thick)
    rotate(this.rotate)
    line(this.x, this.y, this.x, this.y + this.dropSize);
    pop()
  }
}

var drops = []

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 300; i++) {
    drops.push(new Drop())
  }
}

function draw() {
  background(230, 230, 250);
  for (const drop of drops) {
    drop.fall()
    drop.show()
  }
}
