// Make a function that takes a string and returns that string reversed.

// let reverseStr = function(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseStr("Hello World"))

// Make a function that takes a string and returns true if the string could be a number else return false.

// let isNum = function(str) {
//     if(typeof str === "number"){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isNum(3))

// Make a function that takes a number and returns true if the number is even else return false

// let isEven = function(num){
//     if(num % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(2))

// Make a function that takes an array and returns the average of the array.
// arr = [1, 3, 5, 7]
// let averageArray = function (arr) {
//     result = 0
//     for(i=0; i<arr.length;i++){
//         result += arr[i] 
//     }
//     return result / arr.length
// }
// console.log(averageArray(arr))

// Make a function that takes two arrays and returns a single array of the items from the arrays added alternatingly.

arr1 = ["a", "b", "c"]
arr2 = [1, 2, 3]
let combineArrays = function () {
    let arr3 = arr1.concat(arr2)
    let resultArr = []
    for (let i = 0; i < arr3.length; i++) {
        resultArr.push(arr1[i])
        resultArr.push(arr2[i])
  }
    return resultArr.join("").split("")
}
console.log(combineArrays())