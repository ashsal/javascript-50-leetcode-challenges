var maxProfit = function (prices) {
  //console.log(prices);
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let num of prices) {
    //console.log(num);
    if (num < minPrice) {
      minPrice = num;
    } else {
      maxProfit = Math.max(maxProfit, num - minPrice);
    }
  }

  return maxProfit;
};

console.log([7, 1, 5, 3, 6, 4], maxProfit([7, 1, 5, 3, 6, 4]));
console.log([7, 6, 4, 3, 1], maxProfit([7, 6, 4, 3, 1]));
