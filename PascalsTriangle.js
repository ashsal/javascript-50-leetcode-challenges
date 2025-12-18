var generate = function (numRows) {
  console.log(numRows);
  const result = [];
  result.push([1]);
  console.log([1]);
  for (let i = 1; i < numRows; i++) {
    const lastRow = result[i - 1];
    const subArray = [];
    for (let j = 0; j <= i; j++) {
      let firstNumber = 0;
      let secondNumber = 0;
      if (lastRow[j - 1]) {
        firstNumber = lastRow[j - 1];
      }

      if (lastRow[j]) {
        secondNumber = lastRow[j];
      }

      const sum = firstNumber + secondNumber;
      subArray.push(sum);
    }
    console.log(subArray);
    result.push(subArray);
  }

  //console.log(result);
  return result;
};

console.log(5, generate(5));
console.log(1, generate(1));
