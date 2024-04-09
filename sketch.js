class Star {

  constructor() {
    this.x = random(-width / 2, width / 2)
    this.y = random(-height / 2, height / 2)
    this.z = random(width)

    this.previousZ = this.z;
  }

  draw() {
    fill(255)
    noStroke()

    const mapX = map(this.x / this.z, 0, 1, 0, width)
    const mapY = map(this.y / this.z, 0, 1, 0, width)
    const inverseDistance = map(this.z, 0, width, 16, 0)

    ellipse(mapX, mapY, inverseDistance, inverseDistance)

    const previousMapX = map(this.x / this.previousZ, 0, 1, 0, width)
    const previousMapY = map(this.y / this.previousZ, 0, 1, 0, width)

    stroke(255)
    line(previousMapX, previousMapY, mapX, mapY)
  }

  move() {
    this.previousZ = this.z
    this.z = this.z - speed
    if (this.z < 1) {
      this.x = random(-width / 2, width / 2)
      this.y = random(-height / 2, height / 2)
      this.z = random(width)
    }
  }
}

let stars = [];
let speed = 10;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 800; i++) {
    stars.push(new Star())
  }
}

let count = 0

function draw() {
  background(0);
  translate(width / 2, height / 2)
  for (let index = 0; index < stars.length; index++) {
    const star = stars[index];
    star.move()
    star.draw()
  }
}
