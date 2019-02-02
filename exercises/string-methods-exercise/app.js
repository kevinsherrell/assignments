// Make a function that will return any given string into all caps followed by the same string all lowercase.

// function capitalizeAndLowerCase(a) {
//     return a.toUpperCase() + a.toLowerCase()
// }
// console.log(capitalizeAndLowerCase("Hello"))
// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// function findMiddleIndex(b) {
//     return Math.floor(b.length / 2)
// }
// console.log(findMiddleIndex("Hello"))
// console.log("__________________________________")


// Make a function that uses slice() and the other functions you've written to return the first half of the string

// function returnFirstHalf(c) {
//     return c.slice(0, c.length / 2)
// }
// console.log(returnFirstHalf("Hello"))
// console.log("__________________________________")


// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

// function bigHalfLittleHalf(a) {
//     if (a.length % 2 === 0) {
//         return a.slice(0, a.length / 2).toUpperCase() + a.slice(a.length / 2, a.length).toLowerCase()
//     }

//     else {
//         return a.slice(0, Math.floor(a.length / 2)).toUpperCase() + a.slice(a.length / 2, a.length).toLowerCase()
//     }
// }
// console.log(bigHalfLittleHalf("This function uppercases the first half of a string"))

// console.log("__________________________________")

// Optional Code Challenge (This one is a step up in difficulty):
// Make a function that takes any string and capitalizes any character that follows a space.

// function capitalize(str){
//     str = str.split("")
//     for(var i = 0; i < str.length; i++){
//         if(str[i - 1] == ' '){
//            str[i] = str[i].toUpperCase()
//         }
//     }
//     return str.join("")
// }
// console.log(capitalize("this function capitalizes every letter following a space"))