var twoSum = function (numbers, target) {
  //console.log(numbers, target);
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
};

console.log([2, 7, 11, 15], 9, twoSum([2, 7, 11, 15], 9));
console.log([2, 3, 4], 6, twoSum([2, 3, 4], 6));
console.log([-1, 0], -1, twoSum([-1, 0], -1));
