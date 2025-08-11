// let myName = "shipre    "
// let myChannel = "chai    "

// console.log(myName.trueLength);

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
    
}

// myHeros.hitesh()                 //myHeros is able to access the hitesh because if we make function in object then it can be aceess in functions,string,array everywhere,but if we create function in array,string , function then object won't be able to access that function
// myHeros.heyHitesh()
// heroPower.hitesh()
// heroPower.heyHitesh()           //heropower is object and we declare the prototype function for the array so it won't be able to access the heyhitesh


//inheritance

//old syntax
const user = {
    name : "pajji",
    email : "pajji.com"
}

const Teacher = {
    makeVideo : false
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : 'js assign',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// console.log(TASupport.isAvailable);
// console.log(Teacher.name);


// modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher)

console.log(TeachingSupport.makeVideo);




// let anotherUsername = "dipti   "
 
// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True lenght is : ${this.trim().length}`);
    
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()