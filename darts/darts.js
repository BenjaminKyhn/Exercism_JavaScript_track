//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
    let distance = Math.pow(x ** 2 + y ** 2, 0.5);

    if (distance > 10)
        return 0;
    else if (distance <= 10 && distance > 5)
        return 1;
    else if (distance <= 5 && distance > 1)
        return 5;
    else if (distance <= 1 && distance >= 0)
        return 10;
};
