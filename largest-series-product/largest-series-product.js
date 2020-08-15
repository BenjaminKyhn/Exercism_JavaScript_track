//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (num, span) => {
    if (span > num.length)
        throw new Error("Span must be smaller than string length");
    if (span < 0)
        throw new Error("Span must be greater than zero");
    if (num.match(/\D/g))
        throw new Error("Digits input must only contain digits");

    let resultArr = [];

    for (let i = 0; i <= num.length - span; i++) {
        let subResult = 1;
        for (let j = i; j < i + span; j++) {
            subResult *= num[j];
        }
        resultArr.push(subResult);
    }

    return resultArr.sort((a, b) => a - b).reverse().shift();
};
