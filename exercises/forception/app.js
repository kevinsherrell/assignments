let peopleArr = ["John: ", "Jacob: ", "Jingle: ", "Heimer: ", "Schmidt "]
let alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Print the entire alphabetArr after each name in peopleArr

function forception(people, alphabet) {
    let newArr = []
    let resultArr = []
    newArr.push(alphabetArr)
    // console.log(newArr)
    for (let i = 0; i < peopleArr.length; i++) {
        for (let n = 0; n < newArr.length; n++) {
            resultArr.push(peopleArr[i])
            resultArr.push(newArr[n].split(""))
        }
            
    }
    return resultArr
}
console.log(forception(peopleArr, alphabetArr))


