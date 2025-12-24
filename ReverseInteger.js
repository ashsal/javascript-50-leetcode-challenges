const INT_MAX = Math.pow(2, 31) - 1;

var reverse = function (x) {
  //console.log(x);
  let result = 0;
  let number = Math.abs(x);
  while (number > 0) {
    let lastNumber = number % 10;
    number = Math.floor(number / 10);
    result = result * 10 + lastNumber;
    if (result > INT_MAX) {
      return 0;
    }
  }

  if (x < 0) {
    result = -result;
  }

  return result;
};

console.log(123, reverse(123));
console.log(120, reverse(120));
console.log(-123, reverse(-123));
