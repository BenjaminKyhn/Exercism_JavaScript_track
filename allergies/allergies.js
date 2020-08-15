//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    let allergyDataObj = {
      128: "cats",
      64: "pollen",
      32: "chocolate",
      16: "tomatoes",
      8: "strawberries",
      4: "shellfish",
      2: "peanuts",
      1: "eggs",
    };

    this.allergyList = [];
    let n = 128;
    while (n >= 1 && score >= 1){
      if (!allergyDataObj[score] && score > 2 * n){
        score -= n;
        continue;
      }
      if (score >= n){
        this.allergyList.push(allergyDataObj[n]);
        score -= n;
      }
      n /= 2;
    }
  }

  list() {
    return this.allergyList.reverse();
  }

  allergicTo(item) {
    return this.allergyList.includes(item);
  }
}
