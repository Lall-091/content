/**
 * Unit tests for the isPrime function
 * Tests all requirements including edge cases and error handling
 */

// Import the function for testing
import isPrime from './isPrime.js';

describe('isPrime function', () => {
  describe('Input validation', () => {
    test('should throw TypeError for non-number inputs', () => {
      expect(() => isPrime('5')).toThrow(TypeError);
      expect(() => isPrime('5')).toThrow('Expected a number, but received string: 5');
      
      expect(() => isPrime(null)).toThrow(TypeError);
      expect(() => isPrime(undefined)).toThrow(TypeError);
      expect(() => isPrime([])).toThrow(TypeError);
      expect(() => isPrime({})).toThrow(TypeError);
      expect(() => isPrime(true)).toThrow(TypeError);
    });

    test('should throw TypeError for NaN', () => {
      expect(() => isPrime(NaN)).toThrow(TypeError);
      expect(() => isPrime(NaN)).toThrow('Input cannot be NaN');
    });

    test('should throw RangeError for infinite numbers', () => {
      expect(() => isPrime(Infinity)).toThrow(RangeError);
      expect(() => isPrime(Infinity)).toThrow('Input must be a finite number');
      
      expect(() => isPrime(-Infinity)).toThrow(RangeError);
      expect(() => isPrime(-Infinity)).toThrow('Input must be a finite number');
    });

    test('should throw RangeError for non-integers', () => {
      expect(() => isPrime(3.14)).toThrow(RangeError);
      expect(() => isPrime(3.14)).toThrow('Input must be an integer, but received: 3.14');
      
      expect(() => isPrime(5.5)).toThrow(RangeError);
      expect(() => isPrime(-2.7)).toThrow(RangeError);
    });

    test('should throw RangeError for non-positive integers', () => {
      expect(() => isPrime(0)).toThrow(RangeError);
      expect(() => isPrime(0)).toThrow('Input must be a positive integer, but received: 0');
      
      expect(() => isPrime(-1)).toThrow(RangeError);
      expect(() => isPrime(-1)).toThrow('Input must be a positive integer, but received: -1');
      
      expect(() => isPrime(-10)).toThrow(RangeError);
    });
  });

  describe('Edge cases', () => {
    test('should return false for 1 (not prime by definition)', () => {
      expect(isPrime(1)).toBe(false);
    });

    test('should return true for 2 (smallest prime)', () => {
      expect(isPrime(2)).toBe(true);
    });

    test('should return true for 3', () => {
      expect(isPrime(3)).toBe(true);
    });
  });

  describe('Small prime numbers', () => {
    const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    
    test.each(smallPrimes)('should return true for prime number %i', (prime) => {
      expect(isPrime(prime)).toBe(true);
    });
  });

  describe('Small composite numbers', () => {
    const smallComposites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25];
    
    test.each(smallComposites)('should return false for composite number %i', (composite) => {
      expect(isPrime(composite)).toBe(false);
    });
  });

  describe('Larger numbers', () => {
    test('should correctly identify larger prime numbers', () => {
      expect(isPrime(97)).toBe(true);
      expect(isPrime(101)).toBe(true);
      expect(isPrime(103)).toBe(true);
      expect(isPrime(107)).toBe(true);
      expect(isPrime(109)).toBe(true);
      expect(isPrime(113)).toBe(true);
    });

    test('should correctly identify larger composite numbers', () => {
      expect(isPrime(100)).toBe(false); // 4 * 25
      expect(isPrime(102)).toBe(false); // 2 * 51
      expect(isPrime(104)).toBe(false); // 8 * 13
      expect(isPrime(105)).toBe(false); // 3 * 5 * 7
      expect(isPrime(106)).toBe(false); // 2 * 53
    });

    test('should handle perfect squares correctly', () => {
      expect(isPrime(49)).toBe(false); // 7^2
      expect(isPrime(64)).toBe(false); // 8^2
      expect(isPrime(81)).toBe(false); // 9^2
      expect(isPrime(100)).toBe(false); // 10^2
      expect(isPrime(121)).toBe(false); // 11^2
    });
  });

  describe('Performance with large numbers', () => {
    test('should handle moderately large prime numbers efficiently', () => {
      const start = Date.now();
      const result = isPrime(982451653); // Large prime number
      const end = Date.now();
      
      expect(result).toBe(true);
      expect(end - start).toBeLessThan(100); // Should complete within 100ms
    });

    test('should handle moderately large composite numbers efficiently', () => {
      const start = Date.now();
      const result = isPrime(982451654); // Large composite number
      const end = Date.now();
      
      expect(result).toBe(false);
      expect(end - start).toBeLessThan(100); // Should complete within 100ms
    });
  });

  describe('Algorithm correctness', () => {
    test('should correctly identify numbers with large prime factors', () => {
      // Test numbers that are products of two large primes
      expect(isPrime(143)).toBe(false); // 11 * 13
      expect(isPrime(209)).toBe(false); // 11 * 19
      expect(isPrime(221)).toBe(false); // 13 * 17
    });

    test('should correctly identify semi-prime numbers', () => {
      // Numbers that are products of exactly two primes
      expect(isPrime(6)).toBe(false);   // 2 * 3
      expect(isPrime(10)).toBe(false);  // 2 * 5
      expect(isPrime(14)).toBe(false);  // 2 * 7
      expect(isPrime(15)).toBe(false);  // 3 * 5
      expect(isPrime(21)).toBe(false);  // 3 * 7
      expect(isPrime(22)).toBe(false);  // 2 * 11
    });
  });
});