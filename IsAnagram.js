var isAnagram = function (s, t) {
  // validate that s and t are valid strings
  //console.log(s, t);
  if (s.length != t.length) {
    return false;
  }
  const myMap = new Map();
  for (let char of s) {
    //console.log(char);
    let count = myMap.get(char);
    //console.log(count);
    if (count === undefined) {
      count = 0;
    }
    myMap.set(char, ++count);
  }

  //console.log(myMap);

  for (let char of t) {
    if (!myMap.has(char)) {
      return false;
    }
    let count = myMap.get(char);
    if (count === 0) {
      return false;
    }

    myMap.set(char, count - 1);
  }

  return true;
};

console.log("anagram", "nagaram", isAnagram("anagram", "nagaram"));
console.log("rat", "car", isAnagram("rat", "car"));
