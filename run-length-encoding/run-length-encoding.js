//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  return str.replace(/([\w\s])\1+/g, (match, char) => match.length+char);
};

export const decode = (str) => {
  return str.replace(/(\d+)([\w\s])/g, (match, times, char) => char.repeat(times));
};
