const romanNumberChars = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanNumeralExceptions = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
var romanToInt = function (s) {
  const splittedString = s.split("");
  let result = 0;
  let skipNext = false;
  for (let i = 0; i < splittedString.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }
    const currentChar = splittedString[i];

    if (i != splittedString.length - 1) {
      const nextChar = splittedString[i + 1];
      const combinedChar = `${currentChar}${nextChar}`;
      if (romanNumeralExceptions[combinedChar]) {
        result = result + romanNumeralExceptions[combinedChar];
        skipNext = true;
      }
      //console.log(combinedChar);
    }

    if (!skipNext) {
      const intValue = romanNumberChars[currentChar];
      result = result + intValue;
    }
  }

  return result;
};

console.log("III", romanToInt("III"));
console.log("LVIII", romanToInt("LVIII"));
console.log("MCMXCIV", romanToInt("MCMXCIV"));
