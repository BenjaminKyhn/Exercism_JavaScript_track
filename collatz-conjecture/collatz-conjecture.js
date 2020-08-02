//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
    let result = number;
    let steps = 0;

    if (number < 1)
        throw new Error('Only positive numbers are allowed');

    while (result !== 1) {
        if (result % 2 === 0) {
            result = result / 2;
        } else {
            result = (result * 3) + 1;
        }
        steps++;
    }

    return steps;
};
