// *************DATES***********

// const myDate = new Date()
// console.log(myDate); // Logs the current date and time as a Date object.
// console.log(myDate.toString()); // Converts the date to a readable string.
// console.log(myDate.toDateString()); // Outputs the date in "Weekday Month Day Year" format.
// console.log(myDate.toISOString()); // ISO 8601 formatted string (UTC-based).
// console.log(myDate.toJSON()); // JSON-compatible string representation.
// console.log(myDate.toLocaleDateString()); // Localized date string (without time).
// console.log(myDate.toLocaleString()); // Localized date and time string.
// console.log(myDate.toTimeString()); // Outputs the time in a readable format.

// Creating specific dates
// let myCreatedDate = new Date(2023, 0, 12); // Month index starts from 0 (January).
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString()); // Outputs "Thu Jan 12 2023".

// let myCreatedDate = new Date(2023, 0, 12, 5, 3); // Creates a date with specified time.
// console.log(myCreatedDate.toString()); // Logs date and time.

// Parsing strings into dates
// let myCreatedDate = new Date("2023-01-14"); // Parses ISO date format.
// console.log(myCreatedDate.toLocaleString()); // Outputs formatted local string.

// let myCreatedDate = new Date("01-14-2023"); // Parses "MM-DD-YYYY" format.
// console.log(myCreatedDate.toLocaleString()); // Outputs formatted local string.

// let myCreatedDate = new Date("10-16-2024"); // Example for a future date.

// Timestamps
// let myTimeStamp = Date.now(); // Current time in milliseconds since Unix epoch.
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // Milliseconds since Unix epoch for `myCreatedDate`.

// Convert milliseconds to seconds
// console.log(Date.now() / 1000); // Converts milliseconds to seconds (may include decimals).
// console.log(Math.floor(Date.now() / 1000)); // Converts to seconds and removes decimals.

// Working with date components
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // Retrieves current month (0-based index, so +1).
// console.log(newDate.getDate()); // Retrieves current day of the month.

// Localized weekday formats
console.log(newDate.toLocaleString('default', {
    // weekday: "short", // Outputs abbreviated weekday (e.g., "Mon").
    // weekday: "long" // Outputs full weekday (e.g., "Monday").
    weekday: "narrow" // Outputs a single-character weekday (e.g., "M").
}));
