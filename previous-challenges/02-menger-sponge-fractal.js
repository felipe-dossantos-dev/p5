class FractalBox {

    constructor(x, y, z, size) {
        this.position = createVector(x, y, z)
        this.size = size;
        this.children = [];
    }

    show() {
        push();
        // stroke(255);
        fill(255);
        translate(this.position);
        box(this.size);
        pop();
    }

    generate() {
        var boxes = []
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    const sum = abs(x) + abs(y) + abs(z)
                    if (sum > 1) {
                        var newSize = this.size / 3;
                        var newBox = new FractalBox(
                            this.position.x + x * newSize,
                            this.position.y + y * newSize,
                            this.position.z + z * newSize,
                            newSize);
                        boxes.push(newBox);
                    }
                }
            }
        }
        return boxes;
    }
}

var fractal;
var rotateAngle = 1;
var sponge = [];

function setup() {
    createCanvas(600, 600, WEBGL);
    fractal = new FractalBox(0, 0, 0, 100);
    sponge.push(fractal);
}

function mousePressed() {
    var next = []
    for (const box of sponge) {
        next = next.concat(box.generate())
    }
    sponge = next;
}

function draw() {
    background(51);

    rotateX(rotateAngle);
    rotateY(rotateAngle);

    for (const box of sponge) {
        box.show();
    }

    rotateAngle += 0.01;
}
