var wordBreak = function (s, wordDict) {
  console.log(s);
  console.log(wordDict);
  //console.log(s.slice(1, 3));
  const wordDictionary = new Set(wordDict);
  console.log(wordDictionary);
  const stringLength = s.length;
  const dynamicProgramming = new Array(stringLength + 1).fill(false);
  dynamicProgramming[0] = true;
  console.log(dynamicProgramming);

  let maxLength = 0;
  for (let w of wordDict) {
    maxLength = Math.max(maxLength, w.length);
  }
  for (let i = 1; i <= stringLength; i++) {
    const startingPoint = Math.max(0, i - maxLength);
    for (let j = i - 1; j >= startingPoint; j--) {
      if (!dynamicProgramming[j]) {
        continue;
      }
      console.log(i, j, s.slice(j, i));
      if (wordDictionary.has(s.slice(j, i))) {
        dynamicProgramming[i] = true;
        break;
      }
    }
  }
  console.log(dynamicProgramming);
  console.log("maxLength", maxLength);
  return dynamicProgramming[stringLength];
};

console.log(
  "leetcode",
  ["leet", "code"],
  wordBreak("leetcode", ["leet", "code"]),
);

console.log(
  "catsandog",
  ["cats", "dog", "sand", "and", "cat"],
  wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
);
