// O structura de date ce contine campuri pentru a stoca 2 vectori pentru o linie 
// si metode pentru crearea unor vectori pentru noua curba koch 

class KochLine {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    kochB() {
        // Declar un vector gol
        let v = createVector();

        // Punctul v.x se afla in punctul start.x + o treime din distanta puctelor initiale
        v.x = this.start.x + (this.end.x - this.start.x) / 3.0;

        // Punctul v.y se afla in punctul start.y + o treime din distanta puctelor initiale
        v.y = this.start.y + (this.end.y - this.start.y) / 3.0;

        return v;
    }

    kochC() {
        // Creez un nou vector care sa fie in punctul B
        let c = this.kochB();

        // Creez un vector pe care daca il adun la c 
        let v = createVector((this.end.x - this.start.x) / 3.0, (this.end.y - this.start.y) / 3.0);
        // Rotesc vectorul cu un unghi de 60 de grade
        v.rotate(-radians(60));

        // Adaug vectorul v la c ceea ce il va muta in pozitia corecta 
        c.add(v);
        return c;
    }

    kochD() {
        // Declar un vector gol
        let v = createVector();

        // Punctul v.x se afla in punctul start.x + doua treimi din distanta puctelor initiale
        v.x = this.start.x + (this.end.x - this.start.x) * 2 / 3.0;

        // Punctul v.y se afla in punctul start.x + doua treimi din distanta puctelor initiale
        v.y = this.start.y + (this.end.y - this.start.y) * 2 / 3.0;
        return v;
    }
}