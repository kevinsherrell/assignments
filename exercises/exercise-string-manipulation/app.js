let readline = require('readline-sync')
console.log('The String Manipulation App')
console.log('===========================')


let string;
let string2;
let stringOps = ['Make Your String Upprcase ', 'Check How Many Characters In The String ', 'Combine Two Strings: ', 'Return Last Half of Message', 'Remove Characters From Message', 'Start Over And Re Enter Strings']
let continueOption = ['Yes', 'No']
let endApp = false;

// Make one of the inputs all uppercase
function allUpperCase(string){
    console.log(`The result is: ${string.toUpperCase()}`)
}
// Report back the number of characters in a given input
function numberOfChars(string){
    console.log(`The result is: ${string.length}`)
}
// Concatenate two strings together
function joinTwoStrings(string, string2){
    string2 = readline.question('Please Enter A Second String: ')

    console.log(`The result is: ${string += string2}`)
}
// Given a long message of more than twenty letters, return only the last half of the message
function lastHalf(string){
    console.log(`The result is: ${string.slice(string.length / 2, string.length)}`)
}
// Make use choose the start of splice
function lastHalfChoice(string, index){
    console.log(`Your string is ${string.length} characters long.`)
    chooseStart = readline.questionInt('Choose how many characters to remove!')
    index = chooseStart
    console.log(`The result is: ${string.slice(index, string.length)}`)

}


while(!endApp){

// Create a function for the application to run
function beginApp(){
    string = readline.question('Please Enter You String:  ')
    console.log(string.length)

    let opsChoice = readline.keyInSelect(stringOps, 'Which String Operation Would You Like To Perform: ')
    if(opsChoice === 0){
        allUpperCase(string)
    }else if(opsChoice === 1){
        numberOfChars(string)
    }else if(opsChoice === 2){
        joinTwoStrings(string, string2)
    }else if(opsChoice === 3){
        lastHalf(string)
    }else if(opsChoice === 4){
        lastHalfChoice(string)
    }else if(opsChoice === 5){
        beginApp()
    }
    let continueOrNot = readline.keyInSelect(continueOption, "Would You like to perform another operation? ")
    if(continueOrNot === 1){
        endApp = true
    }
}

beginApp()

}
