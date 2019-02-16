let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLKNOPQRSTUVWXYZ1234567890!@#$%^&*()'
function randomPasswordGenerator(num) {
    let newPass = [];
    for (i = 0; i < num; i++) {
        newPass.push(characters[Math.floor(Math.random()* characters.length) + 1])
    }
    return newPass.join("")
}
console.log(randomPasswordGenerator(41))