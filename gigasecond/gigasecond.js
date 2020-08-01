//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  return new Date(date.getTime() + gigasecondInMiliseconds);
};

export function gigasecond(date) {
  return new Date(date.getTime() + gigasecondInMiliseconds);
}

const gigasecondInMiliseconds = 10 ** 9 * 1000;