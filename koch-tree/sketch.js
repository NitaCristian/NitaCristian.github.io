let constantLines = [];
let drawingLines = [];
function setup() {
    createCanvas(500, 500);
    let down = createVector(width / 2, height - 100);
    let up = createVector(width / 2, 100);
    drawingLines.push(new KochLine(down, up));
}

function draw() {
    background(200);
    for (const l of constantLines) {
        line(l.down.x, l.down.y, l.up.x, l.up.y);
    }
    for (const l of drawingLines) {
        line(l.down.x, l.down.y, l.up.x, l.up.y);
    }
}

function keyPressed() {
    if (key == ' ') {
        generate();
    }
}

function generate() {
    let nextDrawing = [];

    for (const l of drawingLines) {
        let a = l.kochA();
        let b = l.kochB();
        let c = l.kochC();
        let d = l.kochD();

        constantLines.push(new KochLine(a, b));
        nextDrawing.push(new KochLine(b, c), new KochLine(b, d));
    }
    drawingLines = nextDrawing;
}