//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
    let queue = [];

    question
        .toLowerCase()
        .replace(/(what|is|by|\?)/g, "")
        .split(" ")
        .forEach(word => {
            if (word.match(/\d+/g))
                queue.push(+word);
            else if (word.match(/plus/))
                queue.push("+");
            else if (word.match(/minus/))
                queue.push("-");
            else if (word.match(/multi/))
                queue.push("*");
            else if (word.match(/divi/))
                queue.push("/");
            else if (word.length)
                throw new Error("Unknown operation");
        });

    if (!queue.length)
        throw new Error("Syntax error");

    let result = queue.shift();

    while (queue.length) {
        let element = queue.shift();
        let nextNumber = queue.shift();
        if (typeof nextNumber != "number")
            throw new Error("Syntax error");
        if (element === "+")
            result += nextNumber;
        else if (element === "-")
            result -= nextNumber;
        else if (element === "*")
            result *= nextNumber;
        else if (element === "/")
            result /= nextNumber;
        else
            throw new Error("Syntax error");
    }

    return result;
};
