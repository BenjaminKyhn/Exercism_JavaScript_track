//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    isEquilateral() {
        if (this.isTriangle())
            return this.a === this.b && this.b === this.c;
        else
            return false;
    }

    isIsosceles() {
        if (this.isTriangle()) {
            return this.a === this.b || this.a === this.c || this.b === this.c;
        } else
            return false;
    }

    isScalene() {
        if (this.isTriangle()) {
            return this.a !== this.b && this.a !== this.c && this.b !== this.c;
        } else
            return false;
    }

    isTriangle() {
        if (this.a > 0 && this.b > 0 && this.c > 0) {
            if (this.a + this.b >= this.c && this.a + this.c >= this.b && this.b + this.c >= this.a)
                return true
            else
                return false;
        } else
            return false;
    }
}
