//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([colorOne, colorTwo]) => {
  return +`${COLORS.indexOf(colorOne)}${COLORS.indexOf(colorTwo)}`
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];