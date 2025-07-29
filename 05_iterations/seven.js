// myNums = [1,2,3,4,5,6,7,8,9,10]

// const myNumbers = myNums.map((num) => num + 10)
// console.log(myNumbers);

// same problem with forEach
// myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = []

// myNums.forEach((num)=> {
//     const add = num+10
//     newNumbers.push(add)
// })

// console.log(newNumbers);

// chaining
// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)                 // we get the new values in this num this time, so here we get the result of num * 10 

// console.log(newNums);

// in chaining we can use different function together also
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >74)                 // we get the new values in this num this time, so here we get the result of num * 10 

console.log(newNums);
