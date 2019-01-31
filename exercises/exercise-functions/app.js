// write a function that accepts two numbers as parameters, and returns the sum.
function addNum(a,b){
    return a + b
}
console.log(addNum(1,5))

console.log("----------------------------------")

// write a function that accepts three nubers as parameters, and returns the sum.
function largestNum(a,b,c){
    return Math.max(a,b,c)
}
console.log(largestNum(1,2,9))

console.log("----------------------------------")

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")

function evenOrOdd(a){
    if(a % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(evenOrOdd(9))
console.log(evenOrOdd(8))

console.log("----------------------------------")

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function lessThanTwentyLong(a){
    if(a.length <= 20){
        return a + a
    }
    else{
        return a.slice(0, a.length / 2)
    }
}
console.log(lessThanTwentyLong("hello world, how are you doing. I ate some cherios today"))

console.log("----------------------------------")


// optional bonus challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

