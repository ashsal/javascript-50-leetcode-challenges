var plusOne1 = function (digits) {
  //console.log(digits);
  const digitsAsString = digits.join("");
  let digitsAsNumber = parseInt(digitsAsString);
  //console.log(digitsAsString, digitsAsNumber);
  digitsAsNumber++;
  //console.log(digitsAsString, digitsAsNumber);
  const splittedDigit = digitsAsNumber.toString().split("");
  //console.log(splittedDigit);
  const result = splittedDigit.map((s) => parseInt(s));
  return result;
};

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    //console.log(digits[i]);
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

console.log([1, 2, 3], plusOne([1, 2, 3]));
console.log([4, 3, 2, 1], plusOne([4, 3, 2, 1]));

console.log([9], plusOne([9]));
console.log([9, 9, 9], plusOne([9, 9, 9]));

const x = Number.MAX_SAFE_INTEGER;
//console.log(x);
