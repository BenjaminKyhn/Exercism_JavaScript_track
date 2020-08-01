//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaString) => {
  let rnaString = "";
  let splitString = dnaString.split("");

  for (let letter of splitString) {
    switch (letter.toUpperCase()) {
      case "G": rnaString += 'C'; break;
      case "C": rnaString += "G"; break;
      case "T": rnaString += "A"; break;
      case "A": rnaString += "U"; break;
    }
  }

  return rnaString;
};
