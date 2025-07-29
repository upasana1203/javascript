// const myObject = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "ruby",
//     py : "python", 
//     swift : "swift by apple"
// }

// for (const key in myObject) {
// //    console.log(`${key} shortcut is for ${myObject[key]}`);
   
// }

// for in loop in array
// const programming = ["js" , "rb" , "py" , "java" , "cpp"]

// for (const key in programming) {
//    console.log(programming[key]);
   
// }


// for in loop for map is not iterable
const map = new Map()
map.set('IN' , 'India')
map.set('US' , 'United states of America')
map.set('Fr' , 'France')
map.set('IN' , 'India')                           // do not take the duplicate values

for (const key in map) {
   console.log(key);
   
}