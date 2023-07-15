function rom(s) {
  let char = s.split("");

  const romDict = [];
  romDict["I"] = 1;
  romDict["V"] = 5;
  romDict["X"] = 10;
  romDict["L"] = 50;
  romDict["C"] = 100;
  romDict["D"] = 500;
  romDict["M"] = 1000;

  let no = 0;

  for (let i = 0; i < char.length; i++) {
    if (romDict[char[i]] < romDict[char[i+1]]) {
        no -= romDict[char[i]];
    }
    else no += romDict[char[i]];
  }
  return no;
}

console.log(rom("XL"));
