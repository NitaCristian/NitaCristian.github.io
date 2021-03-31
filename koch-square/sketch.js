let lines = [];

function setup() {
    createCanvas(500, 500);
    // let start = createVector(0, height / 2);
    // let end = createVector(width, height / 2);
    // lines.push(new KochLine(start, end));

    let start = createVector(width / 4, height / 4);
    let end = createVector(width * 3 / 4, height / 4);
    lines.push(new KochLine(start, end));

    start = createVector(width / 4, height / 4);
    end = createVector(width / 4, height * 3 / 4);
    lines.push(new KochLine(start, end));

    start = createVector(width * 3 / 4, height / 4);
    end = createVector(width * 3 / 4, height * 3 / 4);
    lines.push(new KochLine(start, end));

    start = createVector(width / 4, height * 3 / 4);
    end = createVector(width * 3 / 4, height * 3 / 4);
    lines.push(new KochLine(start, end));
}

function draw() {
    background(230);
    for (let l of lines) {
        line(l.start.x, l.start.y, l.end.x, l.end.y);
    }
}

function keyPressed() {
    if (key == ' ') {
        generate();
    }
}

function generate() {
    let next = [];

    for (let l of lines) {
        // console.log(l);
        // continue;
        let a = l.kochA();
        let b = l.kochB();
        let c = l.kochC();
        let d = l.kochD();
        let e = l.kochE();
        let f = l.kochF();
        let g = l.kochG();
        let h = l.kochH();

        next.push(new KochLine(a, b), new KochLine(b, c), new KochLine(c, d), new KochLine(d, e), new KochLine(e, f), new KochLine(f, g), new KochLine(g, h));
    }

    lines = next;
}