//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class translator {
    static translate(phrase) {
        let vowels = ["a", "e", "i", "o", "u", "xr", "yt"];

        let words = phrase.split(" ");
        let tempWords = [];

        for (let word of words) {
            if (vowels.includes(word[0].toLowerCase())){
                tempWords.push(word + "ay");
                continue;
            }
            else if (word[0] === "x" && word[1] === "r"){
                tempWords.push(word + "ay");
                continue;
            }
            else if (word[0] === "y" && word[1] === "t"){
                tempWords.push(word + "ay");
                continue;
            }
            else if (word[0] === "q" && word[1] === "u"){
                tempWords.push(word.slice(2, word.length) + word[0] + word[1] + "ay");
                continue;
            }

            let temp = word;

            for (let i = 0; i < word.length; i++) {
                if (!vowels.includes(word[i])) {
                    if (word[i] === "q" && word[i + 1] === "u")
                        temp = temp.slice(2, word.length) + word[i] + word[i + 1];
                    else if (i !== 0 && word[i] === "y" && !vowels.includes(word[i - 1])) {
                        tempWords.push(temp + "ay");
                        break;
                    } else {
                        temp = temp.slice(1, word.length) + word[i];
                    }
                } else {
                    tempWords.push(temp + "ay");
                    break;
                }
            }
        }

        return tempWords.join(" ");
    }
}
