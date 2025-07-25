// console.log("U");
// console.log("P");
// console.log("A");
// console.log("S");
// console.log("A");
// console.log("N");
// console.log("A");

// function sayMyName(){
//     console.log("U");
//     console.log("P");
//     console.log("A");
//     console.log("S");
//     console.log("A");
//     console.log("N");
//     console.log("A");
// }

// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(4,9)

// function addTwoNumbers(number1 , number2){
//     const result = number1 + number2
//     console.log("upasana");
    
//     return result
//     // console.log("upasana");   //nothing excutes after return statement
    
// }
// const finalresult = addTwoNumbers(4,9)
// console.log(result);

// function addTwoNumbers(number1 , number2){
//     return number1 + number2
// }

// const finalresult = addTwoNumbers(19,34)
// console.log(finalresult);

// console.log(addTwoNumbers(21,4));


// function loginUserMessage(username){
//     return `${username} is logged in`
// }

// console.log(loginUserMessage("shreya"));


// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage(""));      //if user pass an empty string
// console.log(loginUserMessage());      //if user pass nothing -> it will return undefined

// so for undefined case -> when user pass nothing
// function loginUserMessage(username){
//     // to check whether user pass naem or not
//     if(username === undefined){
//             console.log("please enter a message");
//             return                       //if doesn't pass name it won't the further execution of code    
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());


// function loginUserMessage(username){
//         if(!username){
//             console.log("please enetr a username");
//             return
//         }

//         return `${username} just logged in`
// }

// console.log(loginUserMessage("Kshithij"));


// function loginUserMessage(username = "sam"){
//         if(!username){
//             console.log("please enetr a username");
//             return
//         }

//         return `${username} just logged in`
// }

// console.log(loginUserMessage("Kshithij"));   //if user doesn't pass any value so it will print sam as default value and if user pass so it will overwrite the sam


// ... -> called as rest & spread , it depends on it use case when we call it spread and we call it rest
// here we take a condition where we don't know how much items user add to it's cart and we have to calculate the price of items , so we can define prior the no. of items in such case so we go with rest(...) it will take infinite no. of items and wrap it all in one one array

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,200,500,2000));

// function calculateCartPrice(val1,val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,300,600,9000));


const user = {
    username : "sam",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// console.log(handleObject(user));

// we can pass object directly to function without create it prior
// handleObject({
//     username : "rhea",
//     price : 400
// });


const myNewArray = [200,500,600,300,30000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
