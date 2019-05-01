// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get perimeter() {
        let s = 0
        this.sides.forEach(side => {
            s += side
        });
        return s
    }

    get getCount() {
        return this.sides.length
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sorted = this.sides.sort()
        return (sorted[2] - sorted[1] < sorted[0])
    }
}

class Square extends Polygon {
    get isValid() {
        console.log(this.sides[0], this.sides[1], this.sides[2], this.sides[3])
        return ((this.sides[0] == this.sides[1]) && (this.sides[2] == this.sides[3]) && (this.sides[1] == this.sides[2]))
    }

    get area() {
        return (this.sides[0] * this.sides[1])
    }
}