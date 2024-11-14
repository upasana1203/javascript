//datatypes are divided in two categories based on how they stored ans access in memomry

// 1 - primitive - they call by value
//7 - string , number , boolean , null , undefined , BigInt , symbol

//SYMBOL
const id = Symbol('123')
const idStudent = Symbol('123')

console.log(id === idStudent);

//BIGINT 
const bigNumber = 12345678956789n


//2 - refernece(non-primitive)
// 3 - array , object , functions

//arrays 
const heroes = ["shaktiman" , "naagraj" , "doga"]

//objects 
let myobj = {
    name : "Upasana",
    age : 20,
}

// does js is statically typed or dynamically typed

let myFunction = function(){
    console.log("hello world");
    
}
//Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object