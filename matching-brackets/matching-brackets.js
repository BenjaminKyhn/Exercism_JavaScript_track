//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  let pairs = {
    "}" : "{",
    ")" : "(",
    "]" : "[",
  }

  let stack = [];
  let openBrackets = ["(", "{", "["];

  // Loop over the characters of the string
  for (let char of str) {
    // If the character is an open bracket add it to the top(end) of the stack
    if (openBrackets.includes(char)){
      stack.push(char);
    }
    // If the character is a bracket, but not an open bracket
    else if (char in pairs){
      // Remove the top element in the stack and if it does not pair with the character, return false
      if (stack.pop() !== pairs[char]){
        return false;
      }
    }
  }

  // Return true if the stack is empty
  return stack.length === 0;
};
