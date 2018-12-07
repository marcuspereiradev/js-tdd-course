"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fizzBuzz = function fizzBuzz(num) {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

var _default = fizzBuzz;
exports.default = _default;