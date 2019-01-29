function preliminariesOne() {
    if (5 > 3) {
        console.log("is greater than")
    }
    else {
        console.log("is not greater than")
    }
}

preliminariesOne()

function preliminariesTwo() {
    cat = "cat"
    if (cat.length === 3) {
        console.log("is the length")
    }
    else {
        console.log("is not the length")
    }
}
preliminariesTwo()

function preliminariesThree() {
    cat = "cat"
    dog = "dog"
    if (cat === dog) {
        console.log("the same")
    }
    else {
        console.log("not the same")
    }
}

preliminariesThree()

function bronzeMedal() {
    var person = {
        name: "Bobby",
        age: 12
    }
    if (person.age >= 18) {
        console.log(person.name + " is allowed to go to the movie ")
    }
    if (person.name[0] === "B") {
        console.log(person.name + " is allowed to go to the movie ")
    }
    if (person.name[0] === "B" && person.age >= 18) {
        console.log(person.name + " is allowed to go to the movie")
    }
    else {
        console.log(person.name + " is not allowed to go to the movie ")
    }

}

bronzeMedal()

function silverMedal() {
    if (1 === "1") {
        console.log("Strict")
    }
    else if (1 == "1") {
        console.log("Abstract")
    }
    else {
        console.log("not equal at all")
    }

    if (1 <= 2 && 2 === 4 || 4 > 10 && 5 + 10 > 10) {
        console.log("yes")
    }
}
silverMedal()

function goldMedal() {
    if(typeof "dog" === "string"){
        console.log("string")
    }    
    else{
        console.log("not a string")
    }
    if(typeof true === "boolean"){
        console.log("boolean")
    }
    else{
        console.log("not a boolean")
    }
    if(typeof randomVariable !== "undefined" && randomVariable !== "null"){
        console.log("Defined")
    }
    else{
        console.log("Not Defined")
    }
    if ("s" > 12) {
        console.log("Greater than")
    }
    else {
        console.log("Not greater than")
    }
}
goldMedal()

var myNum = 27;
console.log(myNum % 2 === 0 ? "Even" : "Odd");

