class KochLine {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    kochA() {
        return this.start;
    }
    kochB() {
        let b = p5.Vector.sub(this.end, this.start);
        b.div(4);
        b.add(this.start);

        return b;
    }
    kochC() {
        let c = this.kochB();
        let v = c.copy();
        v.sub(this.start);
        v.rotate(-radians(90));
        c.add(v);
        return c;
    }
    kochD() {
        let d = this.kochC();
        let v = p5.Vector.sub(this.end, this.start);
        v.div(4);
        d.add(v);
        return d;
    }
    kochE() {
        let e = this.kochD();
        let v = p5.Vector.sub(this.end, this.start);
        v.mult(2 / 4.0);
        v.rotate(radians(90));
        e.add(v);
        return e;
    }
    kochF() {
        let f = this.kochE();
        let v = p5.Vector.sub(this.end, this.start);
        v.div(4);
        f.add(v);
        return f;
    }
    kochG() {
        let g = p5.Vector.sub(this.end, this.start);
        g.mult(3 / 4.0);
        g.add(this.start);
        return g;
    }
    kochH() {
        return this.end;
    }
}