let readline = require('readline-sync')

let endCalculator = false
let endCalcOptions = ['Yes', 'No']
let operationChoices = ['Add', 'Subtract', 'Multiply', 'Divide']

// let enterNum = readline.questionInt(numStorage, 'please enter you number')
let num1;
let num2;
// ADD

function addNum(num1, num2) {
    console.log(`The result is: ${num1 + num2}`)
    // return num1 + num2
}


// SUBTRACT
function subtractNum(num1, num2) {
    console.log(`The result is: ${num1 - num2}`)

}
// MULTIPLY
function multiplyNum(num1, num2) {
    console.log(`The result is: ${num1 * num2}`)

}
// DIVIDE
function divideNum(num1, num2) {
    console.log(`The result is: ${num1 / num2}`)
}



while(!endCalculator){
    // create a function
    function beginCalculation() {
    
         // ask user for first number
         num1 = readline.questionFloat('Please Input Your First Number: ')
         console.log(num1)
         // store that number in a variable
         // ask use for the second number
         num2 = readline.questionFloat('Please Input Your Second Number: ')
         console.log(num2)
         // store that in a variable and then run the appropriate function with the two variables as parameters.
        // inside of function ask question, what operation would you like to perform?
        let operation = readline.keyInSelect(operationChoices, 'Which Operation Would Like To Perform?')
    
        if (operation === 0) {
            addNum(num1,num2)
        } else if (operation === 1) {
            subtractNum(num1,num2)
        } else if (operation === 2) {
            multiplyNum(num1,num2)
        } else if (operation === 3) {
            divideNum(num1,num2)
        }
        let continueCalc = readline.keyInSelect(endCalcOptions, 'Would You Like To Perform Another Operation? ') 
        if(continueCalc === 1){
            endCalculator = true
        }
    }
    beginCalculation()
}