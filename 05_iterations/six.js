// const coding = ["js","ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// // forEach loop doesn't return anything , it just can do iterations
// console.log(values);


// const myNUm = [1,2,3,4,5,6,7,8,9,10]
// // we can use filters for return the values, but filter return true and false values
// const newNum = myNUm.filter((num) => num > 4)           //implicit return

// console.log(newNum);


// we can return from foeEach loop also but have to put extra efforts
// const myNUm = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []          //first have to declare an empty array

// myNUm.forEach((num) => {
//     if(num > 4){                        //check condition
//         newNums.push(num)                 //push the value into empty array
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBook = books.filter((bk) => bk.genre === "History" )

userBook = books.filter((bk) => {return bk.publish >= 1995 && bk.genre === "History"})
console.log(userBook);
  
