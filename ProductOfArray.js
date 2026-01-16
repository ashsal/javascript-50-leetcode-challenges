var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);
  let left = 1;
  for (let i = 0; i < length; i++) {
    result[i] = result[i] * left;
    left = left * nums[i];
  }

  let right = 1;

  for (let i = length - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right = right * nums[i];
  }

  return result;
};
console.log([1, 2, 3, 4], productExceptSelf([1, 2, 3, 4]));
console.log([-1, 1, 0, -3, 3], productExceptSelf([-1, 1, 0, -3, 3]));
