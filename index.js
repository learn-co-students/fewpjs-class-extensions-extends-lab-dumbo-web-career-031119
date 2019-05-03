// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let perimeter = 0
    let sides = this.sides
    sides.forEach(side => {
      perimeter += side
    })
    return perimeter
  }

}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return;
    let sides = this.sides
    return ((sides[0] < sides[1]+sides[2]) && (sides[1] < sides[0]+sides[2]) && (sides[2] < sides[1]+sides[0]))
  }
}

class Square extends Polygon {
  get area() {
    return Math.pow(this.sides[0], 2)
  }

  get isValid() {
    let length = this.sides[0];
    let valid = true;
    this.sides.forEach( side => {
      if (side != length) {
        valid = false
      }
    });
    return valid
  }
}
