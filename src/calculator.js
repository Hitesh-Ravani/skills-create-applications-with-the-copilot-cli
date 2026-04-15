#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: adds two numbers together (e.g. node calculator.js add 4 5)
 *   subtract - Subtraction: subtracts the second number from the first (e.g. node calculator.js subtract 10 3)
 *   multiply - Multiplication: multiplies two numbers together (e.g. node calculator.js multiply 3 7)
 *   divide   - Division: divides the first number by the second (e.g. node calculator.js divide 10 2)
 *
 * Usage: node calculator.js <operation> <num1> <num2>
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

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide };

// --- CLI entry point (only runs when executed directly, not when imported) ---
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

if (!operation || arg1 === undefined || arg2 === undefined) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
  process.exit(1);
}

const a = parseFloat(arg1);
const b = parseFloat(arg2);

if (isNaN(a) || isNaN(b)) {
  console.error('Error: Both arguments must be valid numbers.');
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
    default:
      console.error(`Error: Unknown operation "${operation}". Supported: add, subtract, multiply, divide.`);
      process.exit(1);
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end if (require.main === module)
