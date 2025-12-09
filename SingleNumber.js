var singleNumber = function (nums) {
  //console.log(nums);
  let mySet = new Set();
  for (let num of nums) {
    if (mySet.has(num)) {
      mySet.delete(num);
    } else {
      mySet.add(num);
    }
  }

  return [...mySet][0];
};

var singleNumber = function (nums) {
  //console.log(nums);
  let uniqueNumber = 0;

  for (let num of nums) {
    uniqueNumber ^= num;
  }

  return uniqueNumber;
};
console.log([4, 1, 2, 1, 2], singleNumber([4, 1, 2, 1, 2]));
console.log([2, 2, 1], singleNumber([2, 2, 1]));
console.log([1], singleNumber([1]));
