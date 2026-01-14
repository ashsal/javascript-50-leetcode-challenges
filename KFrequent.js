var topKFrequent = function (nums, k) {
  //console.log(nums, k);
  let maxFrequency = 0;
  const freqMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    //console.log(nums[i]);
    if (!freqMap.has(nums[i])) {
      freqMap.set(nums[i], 0);
    }

    const currentValue = freqMap.get(nums[i]);
    const newValue = currentValue + 1;
    freqMap.set(nums[i], newValue);
    if (newValue > maxFrequency) {
      maxFrequency = newValue;
    }
  }
  //console.log(freqMap);
  //console.log(maxFrequency);

  const frequencyCollection = Array(maxFrequency + 1)
    .fill()
    .map(() => []);

  for (let [num, freq] of freqMap) {
    frequencyCollection[freq].push(num);
  }
  //console.log(frequencyCollection);

  const result = [];

  for (let i = maxFrequency; i >= 1 && result.length < k; i--) {
    //console.log(i, frequencyCollection[i]);
    for (let num of frequencyCollection[i]) {
      //console.log(num);
      result.push(num);
      if (result.length === k) {
        break;
      }
    }
  }

  return result;
};

console.log(
  [1, 2, 1, 2, 1, 2, 3, 1, 3, 2],
  2,
  topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)
);

console.log([1, 1, 1, 2, 2, 3], 2, topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log([1], 1, topKFrequent([1], 1));
