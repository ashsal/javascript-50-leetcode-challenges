var canJump = function (nums) {
  //console.log(nums);
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    //console.log(nums[i]);
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

console.log([3, 2, 1, 0, 4], canJump([3, 2, 1, 0, 4]));
console.log([2, 3, 1, 1, 4], canJump([2, 3, 1, 1, 4]));
