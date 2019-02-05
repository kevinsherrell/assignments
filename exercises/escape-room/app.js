var ask = require('readline-sync')

var name = ask.question("What is your name? ");

console.log("Standard greeeting phrase " + name);

var options = ["Put hand in hole", "Find the key", "Open door"]
var gameOver = false
// Build var for finding key
// Game Loop
var keyFound = 0

while (!gameOver) {
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if (userChoice === 0) {
        console.log("You put you hand in the hole. The bear has eaten you")
        gameOver = true
    }
    else if (userChoice === 1) {
        console.log("You found the key! Now unlock the door!")
        keyFound++
        console.log(keyFound)
    }
    else if (userChoice === 2) {

        if (keyFound === 1) {
            console.log("Congratulations, " + name + " you have escaped the room!")
            gameOver = true
        }
        else (
            console.log("You cannot unlock this door without a key")
        )
    }else if(userChoice === -1){
        console.log("Cancelling is not an option, sorry")
    }
   

}