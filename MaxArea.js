var maxArea = function (height) {
  //console.log(height);
  let left = 0;
  let right = height.length - 1;
  let bestArea = 0;
  while (left < right) {
    let h = Math.min(height[left], height[right]);
    let width = right - left;
    let area = h * width;
    bestArea = Math.max(bestArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return bestArea;
};

console.log([1, 8, 6, 2, 5, 4, 8, 3, 7], maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log([1, 8, 6, 7, 2], maxArea([1, 8, 6, 7, 2]));
console.log([1, 1], maxArea([1, 1]));
