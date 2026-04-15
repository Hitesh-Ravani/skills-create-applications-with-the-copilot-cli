#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: adds two numbers together (e.g. node calculator.js add 4 5)
 *   subtract   - Subtraction: subtracts the second number from the first (e.g. node calculator.js subtract 10 3)
 *   multiply   - Multiplication: multiplies two numbers together (e.g. node calculator.js multiply 3 7)
 *   divide     - Division: divides the first number by the second (e.g. node calculator.js divide 10 2)
 *   modulo     - Modulo: returns the remainder of num1 divided by num2 (e.g. node calculator.js modulo 10 3)
 *   power      - Exponentiation: raises num1 to the power of num2 (e.g. node calculator.js power 2 8)
 *   squareRoot - Square Root: returns the square root of num1 (e.g. node calculator.js squareRoot 9)
 *
 * Usage: node calculator.js <operation> <num1> [num2]
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws on divide-by-zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed.');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed.');
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of a negative number is not allowed.');
  return Math.sqrt(n);
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// --- CLI entry point (only runs when executed directly, not when imported) ---
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

const singleArgOps = ['squareRoot'];
const needsSecondArg = !singleArgOps.includes(operation);

if (!operation || arg1 === undefined || (needsSecondArg && arg2 === undefined)) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
  process.exit(1);
}

const a = parseFloat(arg1);
const b = arg2 !== undefined ? parseFloat(arg2) : undefined;

if (isNaN(a) || (needsSecondArg && isNaN(b))) {
  console.error('Error: Arguments must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'modulo':
      result = modulo(a, b);
      break;
    case 'power':
      result = power(a, b);
      break;
    case 'squareRoot':
      result = squareRoot(a);
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Supported: add, subtract, multiply, divide, modulo, power, squareRoot.`);
      process.exit(1);
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end if (require.main === module)
