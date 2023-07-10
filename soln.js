// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const roman = [];

roman["I"] = 1;
roman["V"] = 5;
roman["X"] = 10;
roman["L"] = 50;
roman["C"] = 100;
roman["D"] = 500;
roman["M"] = 1000;

/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  // separate the roman input
  let inp = s.split("");
  let sum = 0;

  //   directly refer to the dictionary if the Roman numeral is only one character
  if (inp.length === 1) return roman[s];

  //   use a for loop to add up the roman characters
  for (let i = 0; i < inp.length; i++) {
    if (roman[inp[i]] < roman[inp[i + 1]]) sum -= roman[inp[i]];

    else sum += roman[inp[i]];
  }
  return sum;
};

console.log(romanToInt("IIV"));
