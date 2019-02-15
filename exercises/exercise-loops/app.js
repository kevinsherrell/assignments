// Write a function that accepts a string as input. Write a loop and
// add each letter of the string to an array. Then return the that new array.
function challengeOne(string) {
    newArr = []
    for (let i = 0; i < string.length; i++) {
        newArr.push(string[i])
    }
    return newArr
}
// console.log(challengeOne('Hello World'))


// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and returns the position of the first occurrence of the specified character. If the character is not found, tell that to the user by returning "Character not found!".

function challengeTwo(string, char){
    let indexOf;
    let newStr = string.toLowerCase()
    let newChar = char.toLowerCase()
    for(let i = 0; i < string.length; i++){
         indexOf = newStr.indexOf(newChar) 
    }
    if(indexOf === -1){
        return 'Character Not Found!'        
    }else{
        return indexOf

    }
}
// console.log(challengeTwo('Hello World', 'H'))

// Write a function that accepts an array of numbers as a parameter.
// Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.
function found42(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 42){
            return 'Found 42!'
        }
    }
}
// console.log(found42([3,32,5,6,6,42]))

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()
let arr = [6,28,89,99,7,3,4,5,7,9,4]
function smallestNum(arr){
    let newArr = []

       arr.sort((a,b) => a - b)
       newArr.push(arr[0])
       return newArr
}
// console.log(smallestNum(arr))