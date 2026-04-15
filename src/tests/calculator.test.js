/**
 * Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including edge cases)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  test('adds two positive numbers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number (5 + -3 = 2)', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers (-4 + -6 = -10)', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds zero to a number (7 + 0 = 7)', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds two decimal numbers (1.5 + 2.5 = 4)', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  test('subtracts two positive numbers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts a larger number from a smaller one (3 - 7 = -4)', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test('subtracts a negative number (5 - -3 = 8)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero (9 - 0 = 9)', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts two equal numbers returns zero (8 - 8 = 0)', () => {
    expect(subtract(8, 8)).toBe(0);
  });
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply', () => {
  test('multiplies two positive numbers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies a positive and a negative number (6 * -3 = -18)', () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test('multiplies two negative numbers (-4 * -5 = 20)', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies by zero returns zero (99 * 0 = 0)', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one returns same number (7 * 1 = 7)', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test('multiplies two decimals (1.5 * 4 = 6)', () => {
    expect(multiply(1.5, 4)).toBe(6);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  test('divides two positive numbers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides resulting in a decimal (7 / 2 = 3.5)', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('divides a negative by a positive (-12 / 4 = -3)', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides a negative by a negative (-15 / -3 = 5)', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test('divides zero by a number returns zero (0 / 9 = 0)', () => {
    expect(divide(0, 9)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing negative number by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('returns remainder of two positive numbers (10 % 3 = 1)', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns 0 when evenly divisible (9 % 3 = 0)', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('works with a negative dividend (-7 % 3 = -1)', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe('power', () => {
  test('raises a number to a positive exponent (2 ** 8 = 256)', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('any number to the power of 0 equals 1 (5 ** 0 = 1)', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('any number to the power of 1 returns itself (7 ** 1 = 7)', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('handles negative exponent (2 ** -1 = 0.5)', () => {
    expect(power(2, -1)).toBe(0.5);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('returns the square root of a perfect square (√9 = 3)', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns the square root of a non-perfect square (√2 ≈ 1.414)', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135623730951);
  });

  test('returns 0 for squareRoot(0)', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of a negative number is not allowed.');
  });
});
