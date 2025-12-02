var containsDuplicate1 = function (nums) {
  // Validation that nums is an array and contains only numbers
  let mySet = new Set();
  for (const num of nums) {
    if (mySet.has(num)) {
      return true;
    }
    mySet.add(num);
  }

  return false;
};

var containsDuplicate = function (nums) {
  // Validation that nums is an array and contains only numbers
  let mySet = new Set(nums);

  if (nums.length != mySet.size) {
    return true;
  }
  return false;
};

console.log([1, 2, 3, 1], containsDuplicate([1, 2, 3, 1]));
console.log([1, 2, 3, 4], containsDuplicate([1, 2, 3, 4]));
console.log(
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
);
