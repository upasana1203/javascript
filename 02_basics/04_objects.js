// this will create an object
const tinderUser = new Object()

//can also create a object this way
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Upasana",
            lastname : "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//this is used in next lectures
// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}

// const obj4 = {obj1,obj2}            //this will not merge the both objects together rather this will give both obj as obj
// console.log(obj4); 

// use assign to merge both obj key & values
// const obj4 = Object.assign(obj1,obj2,obj3)
// const obj4 = Object.assign({},obj1,obj2,obj3)    //this is better than just above line
// console.log(obj4);

// this is used frequently
// const obj4 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj4);


// we can have array of objects
const user = [
    {
        id : 1,
        email : "sy@gmail.com"
    },
    {
        id : 1,
        email : "sy@gmail.com"
    },
    {
        id : 1,
        email : "sy@gmail.com"
    },
    {
        id : 1,
        email : "sy@gmail.com"
    },
    {
        id : 1,
        email : "sy@gmail.com"
    }
]

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// destructuring of object
const course = {
    coursename : "javascript",
    price : "999",
    courseInstructor : "jame"
}

// to use these values
// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(instructor);

// destructuring of array also done learn later
