// three.js is a library also -> search about that as well

// for of loop
// const arr = [1,2,3,4,5,6,7]

// for (const i of arr) {
//     console.log(i)
// }

const stringGreet = "Hello Wworld!"
for (const i of stringGreet) {
    // console.log(`Each char of ${i}`);
    
}


// maps -> it si an object , store values in key value pair and it has unique values no duplicate values and it access the values in order 
const map = new Map()
map.set('IN' , 'India')
map.set('US' , 'United states of America')
map.set('Fr' , 'France')
map.set('IN' , 'India')                           // do not take the duplicate values


// console.log(map);

// loop on map
// for (const i of map) {
//     console.log(i); 
// }

// for (const [key,value] of map) {
//     // console.log(key, ':-' , value);             //[key,value] -> we can access the key value not in array
    
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// so objects are not iterable like this
for(const [key,value] of myObject){
    console.log(key, ':-' , value);
    
}