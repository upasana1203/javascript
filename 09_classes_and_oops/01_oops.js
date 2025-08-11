// //object literal
// const user = {
//     username : "shrishti",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function (){ 
//         // console.log("got user details");
//         // console.log(`username ${this.username}`);
//               console.log(this);
                
//     }
// }


// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);                            // this will print -> {} because we are printing this in gobal context and yet we have nothing in global context


// constructor function
function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

// const userOne = user("shilpa" , 12 , true)
// const userTwo = user("shweta" , 14 , false)            //now if we declare userTwo this way before console so it will overwrites the userOne values , thats why we use new keyword
// console.log(userOne);

//new keyword to create instance for that particular value so the vales don't get overwrites
const userOne = new user("shilpa" , 12 , true)
const userTwo = new user("shweta" , 14 , false)
// console.log(userOne);
console.log(userOne.constructor);

