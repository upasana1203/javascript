const coding = ["js","ruby" , "java" , "python" , "cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
    
// }
// console.log(printMe(coding));

// coding.forEach(printMe)       //can call function also in forEach

// coding.forEach((item , index , arr) => {
//     console.log(item  , index , arr);
// })

const myCoding = [{
    languageName : "javaScript",
    langyuageFile : "js"
},

{
    languageName : "java",
    langyuageFile : "java"
},

{
    languageName : "python",
    langyuageFile : "py"
},
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})
