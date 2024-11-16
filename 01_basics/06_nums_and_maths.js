// ************************NUMBERS************************

// const score = 400
// console.log(score); // Logs the score value (400).

// const balance = new Number(100)
// console.log(balance); // Creates a Number object with value 100.
// console.log(Number.MAX_VALUE) // Maximum possible value in JavaScript.
// console.log(Number.MIN_VALUE) // Minimum positive value in JavaScript.
// console.log(Number.MAX_SAFE_INTEGER) // Largest integer safe for computation.

// console.log(balance.toString()); // Converts number to string.
// console.log(balance.toString().length); // Finds the length of the string.

// console.log(balance.toFixed(2)); // Formats number to 2 decimal places.

// const otherNumber = 23.8999
// console.log(otherNumber.toPrecision(3)); // Rounds to 3 significant digits.

// const otherNumberOne = 1123.8999
// console.log(otherNumberOne.toPrecision(3)); // Rounds large numbers to significant digits.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // Formats number with commas (US system).
// console.log(hundreds.toLocaleString('en-IN')); // Formats number with commas (Indian system).

// ************************MATH************************

// console.log(Math); // Logs the Math object with various methods.

// console.log(Math.abs(-4)); // Returns absolute value (4).
// console.log(Math.round(4.6)); // Rounds to nearest integer (5).
// console.log(Math.ceil(4.2)); // Rounds up to next integer (5).
// console.log(Math.floor(4.9)); // Rounds down to previous integer (4).
// console.log(Math.sqrt(81)); // Returns square root (9).

console.log(Math.random()); // Generates random number between 0 and 1.
console.log((Math.random() * 10) + 1); // Generates random number between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1); // Generates random integer between 1 and 10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generates random integer between `min` and `max`.

 

