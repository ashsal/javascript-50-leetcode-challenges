var lengthOfLongestSubstring = function (s) {
  let charMap = new Map();
  let left = 0;
  let longestLength = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (charMap.has(char) && charMap.get(char) >= left) {
      left = charMap.get(char) + 1;
    }

    const length = right - left + 1;
    longestLength = Math.max(longestLength, length);
    charMap.set(char, right);
  }

  return longestLength;
};

console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb"));
console.log("bbbbb", lengthOfLongestSubstring("bbbbb"));
console.log("pwwkew", lengthOfLongestSubstring("pwwkew"));
