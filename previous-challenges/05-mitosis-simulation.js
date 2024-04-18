class Cell {

  constructor(position, radius, dcolor) {
    this.position = position ?? createVector(random(width), random(height))
    this.radius = radius ?? 80;
    this.color = dcolor ?? color(random(100, 255), 0, random(100, 255))
  }

  move() {
    let velocity = p5.Vector.random2D()
    this.position.add(velocity);
    this.radius += 0.01
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius, this.radius)
  }

  clicked(x, y)
  {
    return dist(x, y, this.position.x, this.position.y) < this.radius / 2
  }

  mitosis()
  {
    let velocity = p5.Vector.random2D().mult(2)
    let newCellPosition = createVector(this.position.x, this.position.y)
    newCellPosition.sub(velocity)
    this.position.add(velocity);
    this.radius = this.radius / 1.4
    return new Cell(newCellPosition, this.radius, this.color)
  }
}

var cells = [];

function mousePressed() {
  let newCells = []
  for (const cell of cells) {
    if (cell.clicked(mouseX, mouseY))
    {
      var newCell = cell.mitosis()
      newCells.push(newCell)
    }
  }
  cells = cells.concat(newCells)
}

function setup() {
  createCanvas(600, 600);
  cells.push(new Cell());
}

function draw() {
  background(51);
  for (const cell of cells) {
    cell.move()
    cell.show()
  }
}
