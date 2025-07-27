const user = {
    username : "shiv",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //-->this will give an empty object , but if we run this line in browser it will give window


// function chai(){
//         let username = "shreyas"
        //    console.log(this)                           //to know about this line, run it
//         console.log(this.username);                 //this won't access the username , this keyword only works in object
        
// }

// chai()


// arrow functions
// const chai = () => {
//     let username = "sukriti"
//     console.log(this);
    
// }

// chai()

// Implicit return - arrow function can be declare in this way also, where no need to write return keyword
// const addTwo = (num1 , num2) =>  num1 + num2

// we can close num1,num2 in paranthesis also for implicit return ,but if you have use curly braces than you have to use return keyword(it calls explicit return)
// const addTwo = (num1 , num2) =>  (num1 + num2)    
// console.log(addTwo(7,42));

// const addTwo = (num1 , num2) => {username : "shreyas"}               //we can't access object like this
const addTwo = (num1 , num2) => ({username : "shreyas"})               // //if we have to access object so we have to enclose them in paranthesis
console.log(addTwo(3,4));

