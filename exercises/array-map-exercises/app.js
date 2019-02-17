
// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    return arr.map(item => item * 2)
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings

function stringItUp(arr) {
    return arr.map(item => item.toString())
}
console.log(stringItUp([2, 5, 100]))// ['2','5','100']

// 3) Capitalize each of an array of names

function capitalizeNames(arr) {
    return arr.map(item => item.toUpperCase())
}
console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']))

// 4) Make an array of strings of the names

function namesOnly(arr) {
    return arr.map(item => item.name)
}
console.log(namesOnly([
    {
        name: 'Angelina Jolie',
        age: 80
    },
    {
        name: 'Eric Jones',
        age: 2
    },
    {
        name: 'Paris Hilton',
        age: 5
    },
    {
        name: 'Kanye West',
        age: 16
    },
    {
        name: 'Bob Ziroll',
        age: 100
    }
]))

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
    let newArr = []

    arr.map(function (item) {
        if (item.age >= 80) {
            newArr.push(`${item.name} can go to the matrix`)
        } else {
            newArr.push(`${item.name} cannot go to the matrix`)
        }
    })
    return newArr

}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));