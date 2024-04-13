
// TODO - fazer um cubo a partir de uma forma geometrica

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

  show() 
  {
    beginShape(QUADS);
    // this.createFrontFaceVertex()
    // this.createBackFaceVertex()
    this.createUnderFaceVertex()
    // this.createLeftFaceVertex()
    // this.createRightFaceVertex()
    // this.createTopFaceVertex()
    endShape();
  }
}

var rotateAngle = 0.0;
var myBox;

function setup() {
  createCanvas(600, 600, WEBGL);
  myBox = new MyBox(0, 0, 0, 100);
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
  rotateAngle += event.delta;
  return false; //to block page scrolling
}

function draw() {
  background(51);

  rotateX(rotateAngle);
  rotateY(rotateAngle);
  // rotateZ(rotateAngle);

  // noFill()
  myBox.show()
  // createFaces(50, [
  //   // frente
  //   [0, 0, 0],
  //   [0, 1, 0],
  //   [1, 1, 0],
  //   [1, 0, 0],

  //   // tras
  //   [0, 0, 1],
  //   [0, 1, 1],
  //   [1, 1, 1],
  //   [1, 0, 1],

  //   // baixo
  //   [0, 1, 1],
  //   [1, 1, 1],
  //   [1, 1, 0],
  //   [0, 1, 0],

  //   // esquerdo
  //   [0, 0, 0],
  //   [0, 0, 1],
  //   [0, 1, 1],
  //   [0, 1, 0],

    // direito
    // [1, 0, 0],
    // [1, 0, 1],
    // [1, 1, 1],
    // [1, 1, 0],

  //   // cima
  //   [0, 0, 1],
  //   [1, 0, 1],
  //   [1, 0, 0],
  //   [0, 0, 0],
  // ]);
}
