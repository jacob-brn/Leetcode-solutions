var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const substractionCases = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (substractionCases[s[i] + s[i + 1]]) {
      total += substractionCases[s[i] + s[i + 1]];
      i += 1;
    } else {
      total += symbols[s[i]];
    }
  }

  return total;
};
