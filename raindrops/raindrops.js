//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
    let soundString = "";

    if (number % 3 === 0)
        soundString += "Pling";
    if (number % 5 === 0)
        soundString += "Plang";
    if (number % 7 === 0)
        soundString += "Plong";
    return soundString.length > 0 ? soundString : number + "";
};
