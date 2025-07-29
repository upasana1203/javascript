// const usermail = "htc@gmail.com"

// if(usermail){
//     console.log("got user mail");
    
// }else{
//     console.log("don't have user mail" );
// }

// const usermail = []

// if(usermail){
//     console.log("got user mail");
    
// }else{
//     console.log("don't have user mail" );
// }

// falsy values
//  false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , "false" , " " , [] , {} , function(){}



// const emptyObj = {}

// if(true){
//     console.log("object is empty")
// }

// the above mention empty object practice is not right if you want to access empty object in if then use
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
    
// }

// same with empty array if you want to access empty array then
// const emptyArray = []

// if(emptyArray.length === 0){
//         console.log("array is empty");
        
// }

// nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
val1 = undefined ?? 15
// console.log(val1);

// terniary operator
// consdition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

