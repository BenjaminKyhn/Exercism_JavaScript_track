//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (num) => {
    if (num < 1 || num > 64)
        throw new Error("square must be between 1 and 64");
    return BigInt(2 ** (num - 1));
};

export const total = (squares = 64) => {
    let result = BigInt(0);
    for (let i = 0; i < squares; i++) {
        result += BigInt(2 ** i);
    }
    return result;
};
