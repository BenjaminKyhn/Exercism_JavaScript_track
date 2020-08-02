//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (leftStrand, rightStrand) => {
  let hamming = 0;

  if (leftStrand === "" && rightStrand !== "")
    throw new Error('left strand must not be empty');
  if (rightStrand === "" && leftStrand !== "")
    throw new Error('right strand must not be empty');
  if (leftStrand.length !== rightStrand.length)
    throw new Error('left and right strands must be of equal length');

  for (let i = 0; i < leftStrand.length; i++) {
    if (leftStrand[i] !== rightStrand[i])
      hamming++;
  }

  return hamming;
};
