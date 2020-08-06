//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let numberString = number + "";
  let sum = 0;

  for (let i = 0; i < numberString.length; i++) {
    sum += numberString[i]**numberString.length;
  }

  return number === sum;
};
