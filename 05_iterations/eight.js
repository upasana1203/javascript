// const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(accumulator , currentValue){
//         console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
//         return accumulator + currentValue
// }, 0)                                                    //value after comma goes in accumulator for first iteration

// console.log(myTotal);

// reducer in arrow function

// const myNums = [1,2,3,4]

// const myTotal = myNums.reduce((acc , curr) => acc+curr , 0)
// console.log(myTotal);

const shoppingCart =  [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(totalPrice)


