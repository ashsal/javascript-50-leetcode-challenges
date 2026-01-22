var search = function (nums, target) {
  //console.log(nums, target);
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // Left part is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right part is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
console.log([4, 5, 6, 7, 0, 1, 2], 0, search([4, 5, 6, 7, 0, 1, 2], 0));

console.log([4, 5, 6, 7, 0, 1, 2], 3, search([4, 5, 6, 7, 0, 1, 2], 3));
console.log([1], 0, search([1], 0));
