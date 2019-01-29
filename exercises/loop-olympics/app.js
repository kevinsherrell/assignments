// PRELIMINARIES
// Write a for loop that prints to the cosole the numbers 0 through 9
for (var i = 0; i <= 9; i++) {
    console.log(i)
}

// Write a loop that prints to the console 9 through 0
for (var i = 9; i >= 0; i--) {
    console.log(i)
}

// Write a for loop that prints these fruits to the console ["banana", "orange", "apple", "kiwi"]
var fruit = ["banana", "orange", "apple", "kiwi"];
for (i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// BRONZE MEDAL
// Write a for loop that will push the numbers 0 though 9 to an array. 
var arr = [];
for (var i = 0; arr.length < 10; i++) {
    arr.push(i)
    console.log(arr)
}
// Write a for loop that prints to the console only even numbers 0 though 100.
for (var i = 0; i < 101; i += 2) {
    console.log(i)
}
// Write a for loop that will push every other fruit to an array. var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i = 1; i < fruit.length; i += 2) {
    console.log(fruit[i])
}
// SILVER MEDAL
// Write a loop that will print out all the names of the people of the people array.
var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor",
    },
    {
        name: "Justin Bieber",
        occupation: "Singer",
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician",
    },
    {
        name: "Oprah",
        occupation: "Entertainer",
    }
]
for (i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

var names = [];
for(var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    console.log(names)
}

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
var names = [];
var occupation = [];

for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        names.push(peopleArray[i].name)
        console.log(names)
    } 
    else{
        occupation.push(peopleArray[i].occupation)
        console.log(occupation)
    }
      
}
