//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
    let formattedISBN = isbn.replace(/\-/g, "");

    if (formattedISBN.length !== 10)
        return false;

    let result = 0;
    let multiplier = 10;

    for (let digit of formattedISBN) {
        if (digit === "X" && digit === formattedISBN[formattedISBN.length - 1])
            result += 10 * multiplier;
        else
            result += digit * multiplier;
        multiplier--;
    }

    return result % 11 === 0;
};