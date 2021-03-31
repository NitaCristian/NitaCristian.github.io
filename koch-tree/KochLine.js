class KochLine {
    constructor(down, up) {
        this.down = down;
        this.up = up;
    }

    kochA() {
        return this.down;
    }
    kochB() {
        let b = this.down.copy();
        let v = p5.Vector.sub(this.down, this.up);
        v.mult(1 / 2.0);
        b.sub(v);
        return b;
    }
    kochC() {
        let c = this.kochB();
        let v = p5.Vector.sub(this.down, this.up);
        v.div(2);
        v.rotate(-radians(45));
        c.sub(v);
        return c;
    }
    kochD() {
        let d = this.kochB();
        let v = p5.Vector.sub(this.down, this.up);
        v.div(2);
        v.rotate(radians(45));
        d.sub(v);
        return d;
    }
}