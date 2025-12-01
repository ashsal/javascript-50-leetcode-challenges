var pivotIndex = function (nums) {
  // Validation that nums is really an array of integers
  let leftSum = 0;
  let rightSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  for (let i = 0; i < nums.length; i++) {
    rightSum = rightSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }

    leftSum = leftSum + nums[i];
  }

  return -1;
};

console.log([1, 7, 3, 6, 5, 6], pivotIndex([1, 7, 3, 6, 5, 6]));
console.log([1, 2, 3], pivotIndex([1, 2, 3]));
console.log([2, 1, -1], pivotIndex([2, 1, -1]));
