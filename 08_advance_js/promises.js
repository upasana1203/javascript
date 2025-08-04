// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// // promise.all
// // yes this is also available, kuch reading aap b kro.

// ********************revise******************************
// create promises and stor it in variable
// const promiseOne = new Promise((resolve,reject) => {
//     setTimeout(function(){
//         console.log('aync task is comleted');
//         resolve()   
        
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// create promise directly
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
    
// }).then(() => console.log("async task 2 is resolved")
// )

// getting data from resolve
// new Promise((resolve, reject)=>{
//     setTimeout(function(){
        
//         resolve({username: "Chai", email: "chai@example.com"})
    
//     },1000)
// }).then((user) => {
//     console.log(user);
    
// })


// 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true
        let error = false

        if(!error){
            resolve({username: "Chai", email: "chai@example.com"})
        } else{
            reject('error : someting is not right')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("the promise will either resolve or reject")
)

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username : "javascript" , password : "123"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
})


// async is not efficient to handle errors
// async function consumePromiseFive(){
//     // promise is an object , so we don't access it like promiseFive()
//     const response = await promiseFive
//     console.log(response);
    
// }

async function consumePromiseFive(){
    // promise is an object , so we don't access it like promiseFive()
    // so we used try catch method to handle errors
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}

consumePromiseFive()