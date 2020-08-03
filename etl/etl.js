//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  let newData = {};

  for (let value in oldData) {
    for (let letter of oldData[value]) {
      newData[letter.toLowerCase()] = parseInt(value);
    }
  }

  return newData;
};
