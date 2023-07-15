function romanToInt(s) {
  const symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (i < n - 1 && symbolValues[s[i]] < symbolValues[s[i + 1]]) {
      total -= symbolValues[s[i]];
    } else {
      total += symbolValues[s[i]];
    }
  }

  return total;
}

console.log(romanToInt("XL"));
