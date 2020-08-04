//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, listOfWords) => {
  let matches = [];
  let normalize = anyWord => anyWord.toLowerCase().split("").sort().join("");
  let normalizedWord = normalize(word);

  for (let position of listOfWords) {
    if (normalizedWord === normalize(position) && word.toLowerCase() !== position.toLowerCase())
      matches.push(position);
  }
  
  return matches;
}
