//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
    static rotate(str, rotation) {
        let lowerCode = "a".charCodeAt();
        let upperCode = "A".charCodeAt();

        let rotated = "";

        for (let char of str) {
            if (char.match(/[\d\.!,' ]/))
                rotated += char;
            if (char.match(/[a-z]/))
                rotated += String.fromCharCode(lowerCode + (char.charCodeAt() - lowerCode + rotation) % 26);
            else if (char.match(/[A-Z]/))
                rotated += String.fromCharCode(upperCode + (char.charCodeAt() - upperCode + rotation) % 26);
        }

        return rotated;
    }
}