//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumberString) => {
    let clean = phoneNumberString.replace(/[\s.()+-]/g, "");

    if (clean.length < 10)
        throw new Error('Incorrect number of digits');
    if (clean.length > 11)
        throw new Error('More than 11 digits');
    if (clean.match(/[a-z]/gi))
        throw new Error('Letters not permitted');
    if (clean.match(/[!:@]/g))
        throw new Error('Punctuations not permitted');

    if (clean.length === 11 && clean.charAt(0) !== "1")
        throw new Error('11 digits must start with 1');
    if (clean.length === 11)
        clean = clean.substr(1, 10);

    if (clean.charAt(0) === "0")
        throw new Error('Area code cannot start with zero');
    else if (clean.charAt(0) === "1")
        throw new Error('Area code cannot start with one');
    else if (clean.charAt(3) === "0")
        throw new Error('Exchange code cannot start with zero');
    else if (clean.charAt(3) === "1")
        throw new Error('Exchange code cannot start with one')

    return clean;
};
