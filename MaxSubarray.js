var maxSubArray = function (nums) {
  //console.log(nums);
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    //console.log(nums[i]);
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
console.log([5, 4, -1, 7, 8], maxSubArray([5, 4, -1, 7, 8]));
console.log([1], maxSubArray([1]));
console.log(
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
