var isPalindrome1 = function (inputNumber) {
  // Input valdation should come here
  const reverseString = inputNumber.toString().split("").reverse().join("");
  return reverseString === inputNumber.toString();
};

var isPalindrome = function (inputNumber) {
  if (inputNumber < 0) {
    return false;
  }

  if (inputNumber < 10) {
    return true;
  }

  let reversedNumber = 0;
  let digitsLeft = inputNumber;

  while (digitsLeft > 0) {
    const lastDigit = digitsLeft % 10;
    digitsLeft = Math.floor(digitsLeft / 10);
    reversedNumber = reversedNumber * 10 + lastDigit;
  }

  //console.log("reverse", inputNumber, reversedNumber);

  return inputNumber === reversedNumber;
};

console.log(109, isPalindrome(109));
console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));
console.log(10, isPalindrome(10));
console.log(9, isPalindrome(9));
