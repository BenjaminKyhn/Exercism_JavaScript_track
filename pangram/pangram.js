//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const isPangram = (string) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i].toLowerCase())){
      let index = alphabet.indexOf(string[i].toLowerCase());
      alphabet.splice(index, 1);
    }
  }

  return alphabet.length === 0 ? true : false;
}
