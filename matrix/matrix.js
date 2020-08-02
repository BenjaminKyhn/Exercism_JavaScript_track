//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.row = matrixString.split("\n").map(value => value.split(" ").map(Number)); // why can't I set this.rows?
    this.column = this.row[0].map((_,index) => this.row.map(value => value[index])) // Don't understand this line
  }

  get rows() {
    return this.row;
  }

  get columns() {
    return this.column;
  }
}
