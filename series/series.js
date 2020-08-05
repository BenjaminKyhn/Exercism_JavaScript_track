//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(str) {
    this.numbers = [...str].map(Number);
  }

  get digits() {
    return this.numbers;
  }

  slices(n) {
    if (this.numbers.length < n)
      throw new Error('Slice size is too big.')

    let slices = [];

    for (let i = 0; i + n <= this.numbers.length; i++) {
      slices.push(this.numbers.slice(i, i + n));
    }

    return slices;
  }
}
