const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => (y === 0) ? 'Its not possible division by zero' : x / y;
module.exports = {sum, sub, mult, div}
