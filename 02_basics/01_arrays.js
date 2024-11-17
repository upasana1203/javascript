// *************ARRAYS*************

const array = [0, 11, 25, 43, 84];
// console.log(array[1]); // Accesses the second element (index 1).

// const myArr2 = new Array(1, 2, 34, 5, 89); // Creates a new array with specified elements.

// *************ARRAY METHODS*************

// array.push(56); // Adds 56 to the end of the array.
// console.log(array); // Logs the updated array.
// array.pop(); // Removes the last element of the array.

// array.unshift(9); // Adds 9 to the beginning of the array (not efficient for large datasets).
// array.shift(); // Removes the first element of the array.
// console.log(array); // Logs the updated array.

// console.log(myArr2.includes(9)); // Checks if 9 exists in the array (returns true/false).
// console.log(myArr2.indexOf(9)); // Finds the index of 9 in the array; returns -1 if not found.

// const newArr = myArr2.join(); // Converts the array into a string, separated by commas.
// console.log(myArr2); // Logs the original array (unchanged).
// console.log(newArr); // Logs the resulting string.
// console.log(typeof newArr); // Logs the type of `newArr` (string).

// *************SPLICE AND SLICE*************

console.log("A", array); // Logs the original array.

const myn1 = array.slice(1, 3); // Extracts elements from index 1 to 3 (not including 3).
console.log(myn1); // Logs the sliced portion of the array.
console.log("B", array); // Logs the original array (unchanged).

const myn2 = array.splice(1, 3); // Removes 3 elements starting at index 1 and returns them.
console.log(myn2); // Logs the removed elements.
console.log("C", array); // Logs the modified array (elements removed).


