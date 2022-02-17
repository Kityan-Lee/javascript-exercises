const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (const i of array) {
    sum += i;
  }
  return sum;
};

const multiply = function(array) {
  let mult = 1;
	for (const i of array) {
    mult *= i;
  }
  return mult;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let fact = 1;
	for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
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
