/**
 * Simple test runner for the isPrime function
 * Runs all tests and reports results
 */

import isPrime from './isPrime.js';

// Simple test framework
class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(description, testFn) {
    this.tests.push({ description, testFn });
  }

  expect(actual) {
    return {
      toBe: (expected) => {
        if (actual === expected) {
          return true;
        } else {
          throw new Error(`Expected ${expected}, but got ${actual}`);
        }
      },
      toThrow: (errorType) => {
        if (typeof actual === 'function') {
          try {
            actual();
            throw new Error(`Expected function to throw ${errorType?.name || 'an error'}, but it didn't throw`);
          } catch (error) {
            if (errorType && !(error instanceof errorType)) {
              throw new Error(`Expected ${errorType.name}, but got ${error.constructor.name}: ${error.message}`);
            }
            return true;
          }
        } else {
          throw new Error('Expected a function for toThrow matcher');
        }
      }
    };
  }

  run() {
    console.log('Running isPrime tests...\n');

    for (const { description, testFn } of this.tests) {
      try {
        testFn();
        console.log(`✅ ${description}`);
        this.passed++;
      } catch (error) {
        console.log(`❌ ${description}`);
        console.log(`   Error: ${error.message}`);
        this.failed++;
      }
    }

    console.log(`\nTest Results: ${this.passed} passed, ${this.failed} failed`);
    console.log(`Total: ${this.tests.length} tests`);
    
    if (this.failed === 0) {
      console.log('\n🎉 All tests passed!');
    } else {
      console.log(`\n❌ ${this.failed} test(s) failed`);
    }
  }
}

// Create test runner instance
const runner = new TestRunner();

// Input validation tests
runner.test('should throw TypeError for string input', () => {
  runner.expect(() => isPrime('5')).toThrow(TypeError);
});

runner.test('should throw TypeError for null input', () => {
  runner.expect(() => isPrime(null)).toThrow(TypeError);
});

runner.test('should throw TypeError for undefined input', () => {
  runner.expect(() => isPrime(undefined)).toThrow(TypeError);
});

runner.test('should throw TypeError for array input', () => {
  runner.expect(() => isPrime([])).toThrow(TypeError);
});

runner.test('should throw TypeError for object input', () => {
  runner.expect(() => isPrime({})).toThrow(TypeError);
});

runner.test('should throw TypeError for boolean input', () => {
  runner.expect(() => isPrime(true)).toThrow(TypeError);
});

runner.test('should throw TypeError for NaN', () => {
  runner.expect(() => isPrime(NaN)).toThrow(TypeError);
});

runner.test('should throw RangeError for Infinity', () => {
  runner.expect(() => isPrime(Infinity)).toThrow(RangeError);
});

runner.test('should throw RangeError for -Infinity', () => {
  runner.expect(() => isPrime(-Infinity)).toThrow(RangeError);
});

runner.test('should throw RangeError for float numbers', () => {
  runner.expect(() => isPrime(3.14)).toThrow(RangeError);
});

runner.test('should throw RangeError for zero', () => {
  runner.expect(() => isPrime(0)).toThrow(RangeError);
});

runner.test('should throw RangeError for negative numbers', () => {
  runner.expect(() => isPrime(-5)).toThrow(RangeError);
});

// Edge cases
runner.test('should return false for 1', () => {
  runner.expect(isPrime(1)).toBe(false);
});

runner.test('should return true for 2', () => {
  runner.expect(isPrime(2)).toBe(true);
});

runner.test('should return true for 3', () => {
  runner.expect(isPrime(3)).toBe(true);
});

// Small primes
const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
smallPrimes.forEach(prime => {
  runner.test(`should return true for prime ${prime}`, () => {
    runner.expect(isPrime(prime)).toBe(true);
  });
});

// Small composites
const smallComposites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25];
smallComposites.forEach(composite => {
  runner.test(`should return false for composite ${composite}`, () => {
    runner.expect(isPrime(composite)).toBe(false);
  });
});

// Larger numbers
runner.test('should correctly identify larger prime 97', () => {
  runner.expect(isPrime(97)).toBe(true);
});

runner.test('should correctly identify larger prime 101', () => {
  runner.expect(isPrime(101)).toBe(true);
});

runner.test('should correctly identify larger composite 100', () => {
  runner.expect(isPrime(100)).toBe(false);
});

runner.test('should correctly identify larger composite 102', () => {
  runner.expect(isPrime(102)).toBe(false);
});

// Perfect squares
runner.test('should return false for perfect square 49', () => {
  runner.expect(isPrime(49)).toBe(false);
});

runner.test('should return false for perfect square 64', () => {
  runner.expect(isPrime(64)).toBe(false);
});

runner.test('should return false for perfect square 81', () => {
  runner.expect(isPrime(81)).toBe(false);
});

// Run all tests
runner.run();