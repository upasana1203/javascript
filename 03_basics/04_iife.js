//Immediately Invoke Function Expression(IIFE)
// An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it's defined.
// It's mainly used to create a private scope for variables, so they don’t pollute the global scope.
// This is especially useful in older JavaScript (before ES6 modules) to avoid variable conflicts and for executing setup code once.

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }

// chai()

// but sometimes our function can access the global variable and which we don't want in our code so we use iife
(function chai(){
    console.log(`DB CONNECTED`);   
})();                                             //we have to add ; for the end of the iife, only then our next line can be execute

// (function purple(){
//     console.log(`DB CONNECTED TWO`);
    
// })();

// IIFE CAN BE USED IN ARROW FUNCTION AS WELL
// (() => {
//     console.log(`DB CONNECTED TWO`);
// })()

// IF WE HAVE TO PASS PARAMETERS INTO IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("shitii");