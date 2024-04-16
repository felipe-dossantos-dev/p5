class MyBox {
  constructor(x, y, z, size) {
    this.position = createVector(x, y, z)
    this.size = size;
  }

  createBackFaceVertex() {
    vertex(this.position.x, this.position.y, this.position.z)
    vertex(this.position.x, this.position.y + this.size, this.position.z)
    vertex(this.position.x + this.size, this.position.y + this.size, this.position.z)
    vertex(this.position.x + this.size, this.position.y, this.position.z)
  }

  createFrontFaceVertex() {
    vertex(this.position.x, this.position.y, this.position.z + this.size)
    vertex(this.position.x, this.position.y + this.size, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y + this.size, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y, this.position.z + this.size)
  }

  createUnderFaceVertex() {
    vertex(this.position.x, this.position.y + this.size, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y + this.size, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y + this.size, this.position.z)
    vertex(this.position.x, this.position.y + this.size, this.position.z)
  }

  createLeftFaceVertex() {
    vertex(this.position.x, this.position.y, this.position.z)
    vertex(this.position.x, this.position.y, this.position.z + this.size)
    vertex(this.position.x, this.position.y + this.size, this.position.z + this.size)
    vertex(this.position.x, this.position.y + this.size, this.position.z)
  }

  createRightFaceVertex() {
    vertex(this.position.x + this.size, this.position.y, this.position.z)
    vertex(this.position.x + this.size, this.position.y, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y + this.size, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y + this.size, this.position.z)
  }

  createTopFaceVertex() {
    vertex(this.position.x, this.position.y, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y, this.position.z + this.size)
    vertex(this.position.x + this.size, this.position.y, this.position.z)
    vertex(this.position.x, this.position.y, this.position.z)
  }

  show() {
    beginShape(QUADS);
    this.createFrontFaceVertex()
    this.createBackFaceVertex()
    this.createUnderFaceVertex()
    this.createLeftFaceVertex()
    this.createRightFaceVertex()
    this.createTopFaceVertex()
    endShape();
  }
}

class FractalBox {
  constructor(x, y, z, size) {
    this.position = createVector(x, y, z)
    this.size = size;
    this.generation = 1;
  }

  createFrontFaceVertex() {
    var totalQuads = 3 ** this.generation;
    var percentualSize = this.size / totalQuads;
    let midQuad = Math.floor(totalQuads / 2);
    for (var i = 0; i < totalQuads; i++)
      for (var j = 0; j < totalQuads; j++) {
        if (i != midQuad || j != midQuad)
        {
          let sizedPositionX = this.position.x + percentualSize * i;
          let sizedPositionY = this.position.y + percentualSize * j;
          vertex(sizedPositionX, sizedPositionY, this.position.z + this.size)
          vertex(sizedPositionX, sizedPositionY + percentualSize, this.position.z + this.size)
          vertex(sizedPositionX + percentualSize, sizedPositionY + percentualSize, this.position.z + this.size)
          vertex(sizedPositionX + percentualSize, sizedPositionY, this.position.z + this.size)
        }
      }
  }

  show() {
    beginShape(QUADS);
    this.createFrontFaceVertex();
    endShape();
  }
}

var rotateAngle = 0.0;
var myBox;

function setup() {
  createCanvas(600, 600, WEBGL);
  myBox = new FractalBox(0, 0, 0, 100);
}

function createFaces(size, positions) {
  beginShape(QUADS);
  positions.forEach(position => {
    vertex(size + position[0] * size,
      size + position[1] * size,
      size + position[2] * size);
  });
  endShape();
}

function mouseWheel(event) {
  rotateAngle += (event.delta * 0.002);
  return false; //to block page scrolling
}

function draw() {
  background(51);

  rotateX(rotateAngle);
  rotateZ(rotateAngle);

  // noFill()
  myBox.show()
}
