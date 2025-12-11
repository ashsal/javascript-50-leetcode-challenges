var majorityElement1 = function (nums) {
  const limit = Math.floor(nums.length / 2);
  const counts = new Map();
  for (let num of nums) {
    let currentCount = counts.get(num);
    if (currentCount === undefined) {
      currentCount = 0;
    }
    let newCount = currentCount + 1;

    if (newCount > limit) {
      return num;
    }
    counts.set(num, newCount);
  }
};

var majorityElement = function (nums) {
  let result = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      result = num;
    }

    if (result === num) {
      count++;
    } else {
      count--;
    }
  }

  return result;
};

console.log([2, 2, 1, 1, 1, 2, 2], majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log([3, 2, 3], majorityElement([3, 2, 3]));
