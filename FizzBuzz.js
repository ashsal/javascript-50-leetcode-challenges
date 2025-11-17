var fizzBuzz1 = function (inputNumber) {
  // Validation
  if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
    throw new Error("inputNumber must be positive integer");
  }

  const result = [];

  for (let i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

var fizzBuzz = function (inputNumber) {
  // Validation
  if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
    throw new Error("inputNumber must be positive integer");
  }

  const result = [];

  for (let i = 1; i <= inputNumber; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }

    if (i % 5 === 0) {
      output += "Buzz";
    }

    result.push(output || i.toString());
  }

  return result;
};
const result = fizzBuzz(15);
console.log(15, result);
