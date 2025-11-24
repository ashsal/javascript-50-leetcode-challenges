var twoSum1 = function (nums, target) {
  // Validate that nums is array of integers, and target is an integer
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      //console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  //return [-1, -1];
};

//n x n = n square

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [i, map.get(compliment)];
    }

    map.set(nums[i], i);
  }
};

console.log([2, 7, 11, 15], 9, twoSum([2, 7, 11, 15], 9));
console.log([3, 2, 4], 6, twoSum([3, 2, 4], 6));
console.log([3, 3], 6, twoSum([3, 3], 6));
