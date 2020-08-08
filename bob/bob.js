//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    let upperCaseLetters = "";
    let lowerCaseLetters = "";

    for (let i = 0; i < message.length; i++) {
        if (message[i].match(/[A-Z]/g))
            upperCaseLetters += message[i];
        if (message[i].match(/[a-z]/g))
            lowerCaseLetters += message[i];
    }

    if (upperCaseLetters.length > lowerCaseLetters.length) {
        console.log(upperCaseLetters);
        if (message.trim().slice(-1) === "?")
            return "Calm down, I know what I'm doing!";
        return "Whoa, chill out!"
    }

    if (message.trim() === "")
        return "Fine. Be that way!";
    if (message.trim().slice(-1) === "?")
        return "Sure.";
    return "Whatever.";
};
