// there are two ways to define object -> 1.literal, 2.constructor(singleton is formed when we define object by constructor)

// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "fullname" : "Upasana Sharma",
    [mySym] : "mykey1",
    age: 18,
    email: "us@gmail",
    location: "jaipur",
    isLoggedIn: false,
    lastLogDays: ["monday" , "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);


// JsUser.email = "us@chatgpt.com"   //this overwrites the email value or changes the email value
// Object.freeze(JsUser)                 //freeze -> by use of freeze we can stop changing of values , like their after use freeze the next change won't happen
// JsUser.email = "us@microsoft.com"      //this not happen becz we freeze the jsuser
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js users");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);


