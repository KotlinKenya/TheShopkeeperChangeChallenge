let totalChange = {
  ones: 0,
  tens: 0,
  hundreds: 0
};

const getFiftys = value => {
  if (!value) {
    return;
  } else if (value < 5) {
    totalChange.ones = totalChange.ones + value * 10;
  } else {
    if (value % 5 === 0) {
      totalChange.tens = totalChange.tens + value / 5;
    } else {
      totalChange.hundreds = totalChange.hundreds + parseInt(value / 5);
      totalChange.ones = totalChange.ones + ((value * 10) % 50);
    }
  }
};

const getOnes = value => {
  totalChange.ones = totalChange.ones + value;
};

const getHundreds = arrValue => {
  if (arrValue.length === 0) {
    totalChange.hundreds = totalChange.hundreds + 0;
  } else {
    toNum = parseInt(arrValue.join(""));
    totalChange.hundreds = totalChange.hundreds + toNum;
  }
};

const getChange = change => {
  const changeArray = Array.from(String(change), Number);
  const length = changeArray.length;
  const ones = changeArray[length - 1];
  const tens = changeArray[length - 2];
  const hundreds = changeArray.slice(0, length - 2);
  getOnes(ones);
  getHundreds(hundreds);
  getFiftys(tens);
  console.log(
    totalChange.hundreds + " 100 note, ",
    totalChange.tens + " 50 note, " + totalChange.ones + " 1 coin"
  );
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's  the change? `, change => {
  getChange(parseInt(change));
  readline.close();
});
