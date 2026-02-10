var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      //nums[mid] === 2
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }

  //return nums;
};

console.log([2, 0, 2, 1, 1, 0], sortColors([2, 0, 2, 1, 1, 0]));
console.log([2, 0, 1], sortColors([2, 0, 1]));
