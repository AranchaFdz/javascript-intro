// functions.test.js
import { describe, it, expect } from 'vitest';
import { max, fizzBuzz } from '../src/intro';

describe('max', () => {
  it('returns the larger of two numbers', () => {
    expect(max(1, 2)).toBe(2);
    expect(max(2, 1)).toBe(2);
    expect(max(-1, -2)).toBe(-1);
    expect(max(-2, -1)).toBe(-1);
  });

  it('returns either when both numbers are equal', () => {
    expect(max(2, 2)).toBe(2);
    expect(max(-1, -1)).toBe(-1);
  });
});

describe('fizzBuzz', () => {
  it('returns FizzBuzz for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it('returns Fizz for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('returns Buzz for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it('returns the number as a string for non-multiples of 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(2)).toBe('2');
    expect(fizzBuzz(4)).toBe('4');
  });
});
