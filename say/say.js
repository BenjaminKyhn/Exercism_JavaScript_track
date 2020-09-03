//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Say {
    inEnglish(number) {
        let ENGLISH = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        }

        let invalidNumberError = new Error("Number must be between 0 and 999,999,999,999.")

        if (number < 0 || number > 999999999999)
            throw invalidNumberError;
        else if (number === 0)
            return "zero";

        let billions = Math.floor(number / 1000000000);
        let millions = Math.floor(number % 1000000000 / 1000000);
        let thousands = Math.floor(number % 1000000 / 1000);
        let hundreds = Math.floor(number % 1000 / 100);
        let remainder = number % 100;
        let singles = remainder % 10;
        let tens = remainder - singles;

        let result = [];

        if (billions)
            result.push(`${this.inEnglish(billions)} billion`);
        if (millions)
            result.push(`${this.inEnglish(millions)} million`);
        if (thousands)
            result.push(`${this.inEnglish(thousands)} thousand`);
        if (hundreds)
            result.push(`${this.inEnglish(hundreds)} hundred`);
        if (remainder){
            result.push(`${ENGLISH[remainder] || `${ENGLISH[tens]}-${ENGLISH[singles]}`}`);
        }

        return result.join(' ');
    }
}
