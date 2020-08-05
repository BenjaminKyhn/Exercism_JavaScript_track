//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
    if (!str.length)
        return true;
    let formattedString = str.toLowerCase().match(/[a-z]/g);
    let uniqueLetters = new Set(formattedString);
    return formattedString.length === uniqueLetters.size;
};