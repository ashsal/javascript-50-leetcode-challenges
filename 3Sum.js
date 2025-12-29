var threeSum = function (nums) {
  //console.log(nums);
  nums.sort((a, b) => a - b);
  //let mySet = new Set();
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
        results.push([nums[i], nums[left], nums[right]]);
        //let key = `${nums[i]}+${nums[left]}+${nums[right]}`;

        /*if (!mySet.has(key)) {
          results.push([nums[i], nums[left], nums[right]]);
          mySet.add(key);
        }*/

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
