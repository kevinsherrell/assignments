let str = "Bookkeeper Larry"
let resultArray = []

// Given a string, remove any duplicate letters.

for (i = 0; i < str.length; i++){
    if(resultArray.indexOf(str[i]) === -1){
        resultArray.push(str[i])
    }
}
console.log(resultArray.join(""))

// BONUS CHALLENGES

// Create a function that randomly removes a letter.

// str = str.split("")
// str.splice(Math.floor(Math.random() * str.length),1)
// str = str.join("")

// console.log(str)

// Create a function that scrambles the original string.
// Create a function using regular expressions that remove all vowels.


console.log(randomOrder())