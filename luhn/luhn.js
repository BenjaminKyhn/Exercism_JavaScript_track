//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (number) => {
  let formattedNumber = number.replace(/ /g, "");

  if (formattedNumber.length < 2)
    return false;

  let numberArr = [];

  let count = 1;
  for (let i = formattedNumber.length - 1; i >= 0; i--) {
    if (count % 2 === 0){
      let value = formattedNumber[i] * 2;
      if (value > 9)
        value -= 9;
      numberArr.push(value);
    }
    else
      numberArr.push(+formattedNumber[i]);
    count++;
  }

  return (numberArr.reduce((acc, val) => acc + val)) % 10 === 0;
};
