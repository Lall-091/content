/**
 * Determines if a number is prime.
 * 
 * A prime number is a natural number greater than 1 that has no positive divisors 
 * other than 1 and itself. This function efficiently checks primality using trial 
 * division optimization.
 * 
 * @param {number} n - The number to test for primality
 * @returns {boolean} true if the number is prime, false otherwise
 * @throws {TypeError} When input is not a number
 * @throws {RangeError} When input is not a positive integer
 * 
 * @example
 * // Returns true
 * isPrime(7);
 * 
 * @example
 * // Returns false
 * isPrime(4);
 * 
 * @example
 * // Returns false (1 is not prime by definition)
 * isPrime(1);
 * 
 * @example
 * // Throws TypeError
 * isPrime("5");
 * 
 * @example
 * // Throws RangeError
 * isPrime(-5);
 */
function isPrime(n) {
  // Input validation: Check if input is a number
  if (typeof n !== 'number') {
    throw new TypeError(`Expected a number, but received ${typeof n}: ${n}`);
  }

  // Input validation: Check for NaN
  if (Number.isNaN(n)) {
    throw new TypeError('Input cannot be NaN');
  }

  // Input validation: Check for infinity
  if (!Number.isFinite(n)) {
    throw new RangeError('Input must be a finite number');
  }

  // Input validation: Check if input is an integer
  if (!Number.isInteger(n)) {
    throw new RangeError(`Input must be an integer, but received: ${n}`);
  }

  // Input validation: Check if input is positive
  if (n < 1) {
    throw new RangeError(`Input must be a positive integer, but received: ${n}`);
  }

  // Edge cases: 1 is not prime by definition
  if (n === 1) {
    return false;
  }

  // Edge case: 2 is the only even prime number
  if (n === 2) {
    return true;
  }

  // Even numbers greater than 2 are not prime
  if (n % 2 === 0) {
    return false;
  }

  // Check odd divisors up to the square root of n
  // This optimization reduces time complexity from O(n) to O(√n)
  const sqrt = Math.sqrt(n);
  for (let factor = 3; factor <= sqrt; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }

  return true;
}

// Export as ES6 module (default export)
export default isPrime;

// Also export as named export for convenience
export { isPrime };