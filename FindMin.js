var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
console.log([4, 5, 6, 7, 0, 1, 2], findMin([4, 5, 6, 7, 0, 1, 2]));
console.log([3, 4, 5, 1, 2], findMin([3, 4, 5, 1, 2]));
console.log([11, 13, 15, 17], findMin([11, 13, 15, 17]));
