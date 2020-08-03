//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  let words = str.toLowerCase().match(/\w+('\w+)?/g);
  let counts = {};

  words.forEach(function (x) {
    counts[x] = (counts[x] || 0) +1;
  });

  return counts;
};
