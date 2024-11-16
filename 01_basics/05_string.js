// const name = "upasana"
// const repoCount = 50

// console.log(name + repoCount + "value");      //we can add some other thing as well , but it is not the right way

//right way - string interpolation
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// // to access prototype
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));


// const anotherString = gameName.substring(0,5)          //in substring its not take -ve value , it consider them as +ve
// console.log(anotherString);

// const newString = gameName.slice(-8 , 4)
// console.log(newString);


// trim works only on white spaces
// const newStringOne =  "        upasana.        "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://upasana.com/upasana%20sharma"
// console.log(url.replace('%20' , '_'));

// include check that whether tha word is in string or not
// console.log(url.includes("Shreya"));


// change the string into an array
console.log(gameName.split('-'));

