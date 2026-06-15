# JavaScript Utility Functions

This directory contains JavaScript utility functions and examples.

## isPrime Function

A comprehensive JavaScript function that determines if a number is prime.

### Features

- **Comprehensive Input Validation**: Checks for correct data types and value ranges
- **Error Handling**: Throws descriptive errors for invalid inputs
- **Edge Case Handling**: Properly handles special cases like 1, 2, and negative numbers
- **Performance Optimized**: Uses trial division up to √n for efficiency
- **Well Documented**: Includes JSDoc comments with examples
- **Thoroughly Tested**: Comprehensive unit test suite

### Files

- `isPrime.js` - The main function implementation
- `isPrime.test.js` - Comprehensive unit tests (Jest format)
- `runTests.js` - Simple test runner that works without Jest
- `demo.js` - Usage examples and demonstrations

### Usage

```javascript
import isPrime from './isPrime.js';

// Basic usage
console.log(isPrime(7));  // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false (1 is not prime by definition)

// Error handling
try {
  isPrime("5");  // Throws TypeError
} catch (error) {
  console.log(error.message);
}

try {
  isPrime(-5);   // Throws RangeError
} catch (error) {
  console.log(error.message);
}
```

### Function Signature

```javascript
/**
 * @param {number} n - The number to test for primality
 * @returns {boolean} true if the number is prime, false otherwise
 * @throws {TypeError} When input is not a number
 * @throws {RangeError} When input is not a positive integer
 */
function isPrime(n)
```

### Requirements Met

1. ✅ Function accepts an integer parameter
2. ✅ Returns true if prime, false otherwise
3. ✅ Throws error for non-positive integers
4. ✅ Includes comprehensive input validation
5. ✅ Includes comprehensive error handling
6. ✅ Includes JSDoc comments for documentation
7. ✅ Includes unit tests to verify functionality

### Algorithm Details

- Handles edge cases efficiently (1, 2, even numbers)
- Uses trial division optimization (checks only odd divisors up to √n)
- Time complexity: O(√n)
- Space complexity: O(1)

### Running Tests

To run the unit tests:

```bash
# Using the simple test runner
node runTests.js

# Or if you have Jest installed and configured
npm test isPrime.test.js
```

### Running Demo

To see the function in action:

```bash
node demo.js
```