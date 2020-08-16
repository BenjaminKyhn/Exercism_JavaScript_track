//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
    if (takeDownCount > 1) {
        if (initialBottlesCount === 0)
            return [`No more bottles of beer on the wall, no more bottles of beer.`,
                `Go to the store and buy some more, 99 bottles of beer on the wall.`]
        else if (initialBottlesCount === 1)
            return [`${initialBottlesCount} bottle of beer on the wall, ${initialBottlesCount} bottle of beer.`,
                `Take it down and pass it around, no more bottles of beer on the wall.`,
                ""].concat(recite(initialBottlesCount - 1, takeDownCount - 1));
        else if (initialBottlesCount === 2)
            return [`${initialBottlesCount} bottles of beer on the wall, ${initialBottlesCount} bottles of beer.`,
                `Take one down and pass it around, ${initialBottlesCount - 1} bottle of beer on the wall.`,
                ""].concat(recite(initialBottlesCount - 1, takeDownCount - 1));
        else
            return [`${initialBottlesCount} bottles of beer on the wall, ${initialBottlesCount} bottles of beer.`,
                `Take one down and pass it around, ${initialBottlesCount - 1} bottles of beer on the wall.`,
                ""].concat(recite(initialBottlesCount - 1, takeDownCount - 1));
    } else if (initialBottlesCount === 0)
        return [`No more bottles of beer on the wall, no more bottles of beer.`,
            `Go to the store and buy some more, 99 bottles of beer on the wall.`]
    else if (initialBottlesCount === 1)
        return [`${initialBottlesCount} bottle of beer on the wall, ${initialBottlesCount} bottle of beer.`,
            `Take it down and pass it around, no more bottles of beer on the wall.`]
    else if (initialBottlesCount === 2)
        return [`${initialBottlesCount} bottles of beer on the wall, ${initialBottlesCount} bottles of beer.`,
            `Take one down and pass it around, ${initialBottlesCount - 1} bottle of beer on the wall.`]
    else
        return [`${initialBottlesCount} bottles of beer on the wall, ${initialBottlesCount} bottles of beer.`,
            `Take one down and pass it around, ${initialBottlesCount - 1} bottles of beer on the wall.`]
};