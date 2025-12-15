var intersect = function (nums1, nums2) {
  let smallArray = nums1;
  let bigArray = nums2;
  if (nums1.length > nums2.length) {
    smallArray = nums2;
    bigArray = nums1;
  }

  //console.log(smallArray, bigArray);
  const counts = new Map();
  for (let num of smallArray) {
    //console.log(num);
    let currentCount = counts.get(num);
    if (currentCount === undefined) {
      currentCount = 0;
    }

    counts.set(num, currentCount + 1);
  }

  //console.log(counts);
  const result = [];
  for (let num of bigArray) {
    let count = counts.get(num);
    if (count === undefined) {
      count = 0;
    }

    if (count > 0) {
      result.push(num);
      counts.set(num, count - 1);
    }
  }

  return result;
};

console.log([4, 9, 5], [9, 4, 9, 8, 4], intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log([1, 2, 2, 1], [2, 2], intersect([1, 2, 2, 1], [2, 2]));
