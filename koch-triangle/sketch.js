// Array ce va contine toate liniile pentru curba lui Koch
let lines = [];

function setup() {
    // Setez marimea canvas-ului sa fie de 800px lungime si 300 inaltime
    createCanvas(800, 800);

    // Creez doi vectori pentru linia initiala
    // let start = createVector(0, height - 50);
    // let end = createVector(width, height - 50);

    // Adaug o linie definita de aceste doua puncte
    // lines.push(new KochLine(start, end));

    let offset = 100;

    /*
        /
       /
      /
     /
    /
    */
    let start = createVector(offset, height - 2 * offset);
    let end = createVector(width / 2, offset);
    console.log(start.dist(end));
    lines.push(new KochLine(start, end));

    /*
    __ __ __ __ __
    */
    start = createVector(width - offset, height - 2 * offset);
    end = createVector(offset, height - 2 * offset);
    console.log(start.dist(end));
    lines.push(new KochLine(start, end));


    /*
    \
     \
      \
       \
        \
    */
    start = createVector(width / 2, offset);
    end = createVector(width - offset, height - 2 * offset);
    console.log(start.dist(end));
    lines.push(new KochLine(start, end));

}

// Deseneaza in fiecare frame
function draw() {
    // Sterge ce a fost desenat anterior setand culoarea fundalului 
    background(100);

    // Pentru fiecare linie
    for (let l of lines) {
        // Deseneaza pe ecran o linie definita de vectorii inceput si final
        line(l.start.x, l.start.y, l.end.x, l.end.y);
    }
}

// Functia va fi apelata la apararea unei taste
function keyPressed() {
    // Daca tasta este spatiu
    if (key == ' ') {
        // Genereaza-mi pe baza liniilor curente un nou set de linii pentru curba lui Koch
        generate();
    }
}

function generate() {
    // Declaram un nou vector ce va contine toate liniile pentru noua curba
    let next = [];

    // Pentru fiecare linie din setul curent de linii
    for (let l of lines) {

        // Defineste vectorii urmatori
        let a = l.start;
        let b = l.kochB();
        let c = l.kochC();
        let d = l.kochD();
        let e = l.end;

        // Stocheaza linii formate din vectorii de mai sus
        next.push(new KochLine(a, b), new KochLine(b, c,), new KochLine(c, d), new KochLine(d, e));
    }

    // Setul de linii curente devine noul set
    lines = next;
}