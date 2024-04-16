class Drop {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.x = random(-100, width + 100);
    this.y = random(-1.5 * height, 0);
    this.z = random(0, 20);
    this.yspeed = map(this.z, 0, 20, 3, 8);
    this.rotate = map(this.z, 0, 20, -0.1, -0.05);
    this.dropSize = map(this.z, 0, 20, 10, 20);
    this.thick = map(this.z, 0, 20, 1, 1.5);
  }

  fall() {
    this.y += this.yspeed;
    this.yspeed += 0.1;
    if (this.y > height) {
      this.initialize()
    }
  }

  show() {
    push()
    stroke(138, 43, 226)
    strokeWeight(this.thick)
    rotate(this.rotate)
    line(this.x, this.y, this.x, this.y + this.dropSize);
    pop()
  }
}

var drops = []

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 200; i++) {
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
