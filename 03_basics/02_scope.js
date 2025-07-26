// const a = 10
// let b = 20
// var c =30

// console.log(a);
// console.log(b);
// console.log(c);



// var c = 30    //variable has global scope 
// let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER" , a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "reva"

    // scope in nested functions
    function two(){
        const website = "youtube"
        console.log(username);        //this can access the username becuase one it is access under the scope and it can access fro parent function
        
    }
    // console.log(website);

    two()
}

// console.log(username);
// one()

if(true){
    const username = "shrishti"
    if(username === "shrishti"){
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ********************INTERESTING***********************

console.log(addOne(3))             //this is valid we can call function above the function declaration
function addOne(num){
        return num + 1
}

// // console.log(addOne(3));


// console.log(addTwo(4));               but we can't access this function above it's declaration, beacuse we hols the function in a variable , their we introduce the concept of hoisting
const addTwo = function (num){
    return num + 2
}
// console.log(addTwo(4));
