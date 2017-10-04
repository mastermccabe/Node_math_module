var mathlib = require('./mathlib')(); //notice the extra invocation parentheses!
console.log(mathlib);

mathlib.add(6, 6);
mathlib.multiply(2, 3);
mathlib.square(9);
mathlib.random(1, 20);
