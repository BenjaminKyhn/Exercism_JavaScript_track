//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  return str.replace(/['_]/, "").match(/(\b[a-zA-Z])/g).join("").toUpperCase();
};
