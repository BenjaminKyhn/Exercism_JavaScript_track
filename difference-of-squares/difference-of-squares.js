//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.numbers = [];

    for (let i = 1; i <= number; i++) {
      this.numbers.push(i);
    }
  }

  get sumOfSquares() {
    return this.numbers.reduce((acc, cur) => acc + cur ** 2);
  }

  get squareOfSum() {
    return this.numbers.reduce((acc, cur) => acc + cur) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
