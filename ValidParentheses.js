const obj = {
  1: 2,
  3: 4,
  5: 6,
};

console.log(obj[1]);
console.log(obj[5]);

const arr = [];
arr.push(1);
console.log(arr);
arr.push(2);
console.log(arr);
const lastElement = arr.pop();
console.log(lastElement, arr);

const brackets = {
  "(": ")",
  "{": "}",
  "[": "]",
};

console.log(brackets["["]);

var isValid = function (inputString) {
  // inputString should only have brackets

  const bracketArray = [];
  for (let char of inputString) {
    if (brackets[char]) {
      bracketArray.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const lastOpeningBracket = bracketArray.pop();
      if (brackets[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return bracketArray.length === 0;
};

console.log("()", isValid("()"));
console.log("()[]{}", isValid("()[]{}"));
console.log("(]", isValid("(]"));
console.log("([])", isValid("([])"));
console.log("([)]", isValid("([)]"));
