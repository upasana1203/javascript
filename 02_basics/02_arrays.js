const marvel_heros = ["thor","capAmerica","ironman"]

const dc_heros = ["shaktiman" , "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


// const another_array = [1,2,3,[4,5,6],[6,7,[8,1]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("HITESH"))                // from -> makes the array from given value
// console.log(Array.from({name:"Hitesh"}))         //this will not make array an array , but it will give you an empty array , becz when we give it keys and value so we have to tell it to make array either from keys or values , ----> it's a interesting case can ask in interviews


let score1 = 100
let score2 = 300
let score3 = 500

console.log(Array.of(score1,score2,score3))          // of -> returns a new array from a set of elemnts