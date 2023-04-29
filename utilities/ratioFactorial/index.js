const factorialOfNumber = require("../factorial/index");

//console.log(factorialOfNumber);

const ratioOfTwoNumbers = require("../ratio/index");

//console.log(ratioOfTwoNumbers)

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);

  //console.log(ratio);

  const factorial = factorialOfNumber(num3);

  //console.log(factorial);

  return { ratio, factorial };
};

//ratioAndFact(3, 3, 3);

module.exports = ratioAndFactorial;
