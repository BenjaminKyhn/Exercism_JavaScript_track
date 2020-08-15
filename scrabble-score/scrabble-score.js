//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  let scoresObj = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };

  let scores = Object.entries(scoresObj);

  let result = 0;

  for (let letter of word.toUpperCase()) {
    scores.forEach(([letters, score]) => {
      if (letters.includes(letter))
        result += score;
    });
  }

  return result;
};