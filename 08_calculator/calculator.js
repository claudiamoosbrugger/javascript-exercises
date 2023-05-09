const add = (number1, number2) => number1 + number2;

const subtract = (number1, number2) => number1 - number2;


const sum = numbers => {
  return numbers.reduce((accumulator, x) => accumulator + x, 0);
};

const multiply = numbers => {
  return numbers.reduce((accumulator,x) => accumulator * x, 1)
};

const power = (x, y) => Math.pow(x, y);

const factorial = function(number) {
  let factorialResult = 1;
  for(let i = number; i > 0; i--) {
    factorialResult *= i;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
