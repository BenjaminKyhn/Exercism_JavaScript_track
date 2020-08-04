//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
    if (number < 1)
        throw new Error("Classification is only possible for natural numbers.");

    let sumOfFactors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0)
            sumOfFactors += i;
    }

    if (sumOfFactors === number)
        return "perfect";
    if (sumOfFactors > number)
        return "abundant";
    return "deficient";
};
