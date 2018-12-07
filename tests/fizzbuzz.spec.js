import { expect } from 'chai';
import fizzBuzz from '../src/fizzbuzz_main.js';

describe('FizzBuzz', () => {
  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(20)).to.be.equal('Buzz');
  });
  it('should return the number when no multiple', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
  });
  it('should return 0 when 0', () => {
    expect(fizzBuzz(0)).to.be.equal(0);
  });
});
