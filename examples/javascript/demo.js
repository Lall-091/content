/**
 * Demonstration of the isPrime function
 * Shows various usage examples and error handling scenarios
 */

// Import the isPrime function
import isPrime from './isPrime.js';

console.log('=== isPrime Function Demonstration ===\n');

// Basic usage examples
console.log('Basic Usage:');
console.log(`isPrime(2) = ${isPrime(2)}`);    // true
console.log(`isPrime(3) = ${isPrime(3)}`);    // true
console.log(`isPrime(4) = ${isPrime(4)}`);    // false
console.log(`isPrime(5) = ${isPrime(5)}`);    // true
console.log(`isPrime(17) = ${isPrime(17)}`);  // true
console.log(`isPrime(25) = ${isPrime(25)}`);  // false

// Edge cases
console.log('\nEdge Cases:');
console.log(`isPrime(1) = ${isPrime(1)}`);    // false (1 is not prime by definition)
console.log(`isPrime(2) = ${isPrime(2)}`);    // true (smallest prime)

// Testing larger numbers
console.log('\nLarger Numbers:');
const largeNumbers = [97, 98, 99, 100, 101];
largeNumbers.forEach(num => {
  console.log(`isPrime(${num}) = ${isPrime(num)}`);
});

// Error handling demonstrations
console.log('\nError Handling Demonstrations:');

// Test with non-number inputs
const invalidInputs = [
  { value: '5', type: 'string' },
  { value: null, type: 'null' },
  { value: undefined, type: 'undefined' },
  { value: [], type: 'array' },
  { value: {}, type: 'object' },
  { value: true, type: 'boolean' }
];

invalidInputs.forEach(({ value, type }) => {
  try {
    isPrime(value);
  } catch (error) {
    console.log(`Error with ${type} input (${value}): ${error.message}`);
  }
});

// Test with special number values
const specialNumbers = [
  { value: NaN, name: 'NaN' },
  { value: Infinity, name: 'Infinity' },
  { value: -Infinity, name: '-Infinity' },
  { value: 3.14, name: 'float' },
  { value: 0, name: 'zero' },
  { value: -5, name: 'negative' }
];

specialNumbers.forEach(({ value, name }) => {
  try {
    isPrime(value);
  } catch (error) {
    console.log(`Error with ${name} (${value}): ${error.message}`);
  }
});

// Performance demonstration
console.log('\nPerformance Test:');
const largeNumber = 982451653; // Large prime number
const start = Date.now();
const result = isPrime(largeNumber);
const end = Date.now();
console.log(`isPrime(${largeNumber}) = ${result} (computed in ${end - start}ms)`);

// Find first 20 prime numbers
console.log('\nFirst 20 Prime Numbers:');
const primes = [];
let candidate = 2;
while (primes.length < 20) {
  if (isPrime(candidate)) {
    primes.push(candidate);
  }
  candidate++;
}
console.log(primes.join(', '));

console.log('\n=== Demonstration Complete ===');