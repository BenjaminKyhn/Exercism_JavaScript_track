//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let primeFactors = [];

  while (num > 1){
    for (let i = 2; i > 0; i++) {
      if (num % i === 0){
        primeFactors.push(i);
        num /= i;
        break;
      }
    }
  }

  return primeFactors;
};
