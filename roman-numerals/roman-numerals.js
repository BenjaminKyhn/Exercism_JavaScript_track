//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (number) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  for (let key in romanNumbers) {
    // Truncate to remove fractions from uneven divisions
    let count = Math.trunc(number/romanNumbers[key]);
    // Use only the whole number left over from the division and repeat the corresponding key that many times
    roman += key.repeat(count);
    // Remove the same number from the input number
    number -= romanNumbers[key] * count;
  }

  return roman;
};
