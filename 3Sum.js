var threeSum = function (nums) {
  //console.log(nums);
  nums.sort((a, b) => a - b);
  //const uniqueSet = new Set();
  //console.log(nums);
  let results = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    //console.log(nums[i]);
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        //let key = `${nums[i]}+${nums[left]}+${nums[right]}`;
        //if (!uniqueSet.has(key)) {
        results.push([nums[i], nums[left], nums[right]]);
        //uniqueSet.add(key);
        //}

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return results;
};

console.log([-1, 0, 1, 2, -1, -4], threeSum([-1, 0, 1, 2, -1, -4]));
console.log([-1, 0, 1, 2], threeSum([-1, 0, 1, 2]));
