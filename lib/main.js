"use strict";

var sum = function sum(x, y) {
  return x + y;
};

var sub = function sub(x, y) {
  return x - y;
};

var mult = function mult(x, y) {
  return x * y;
};

var div = function div(x, y) {
  return y === 0 ? 'Its not possible division by zero' : x / y;
};

module.exports = {
  sum: sum,
  sub: sub,
  mult: mult,
  div: div
};