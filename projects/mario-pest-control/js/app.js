var goombahs = document.getElementById("goombah")
var goombahTotal = goombahs.value * 5
var bobOmbs = document['mario-form']['bob-omb']
var bobOmbTotal = bobOmbs.value * 7
var cheepCheeps = document['mario-form']['cheep-cheep']
var cheepCheepTotal = cheepCheeps.value * 11
var yoshiBtn = document.getElementById("yoshi-button")
var totalPriceBox = document.getElementById("calculation")
var totalPrice = 0

totalPriceBox.textContent = 0




goombahs.addEventListener('input', function () {
    var value = Number(totalPriceBox.textContent)
    totalPriceBox.textContent = value + goombahs.value * 5 
})
bobOmbs.addEventListener('input', function () {
    var value = Number(totalPriceBox.textContent)
    totalPriceBox.textContent = value + bobOmbs.value * 7
})
cheepCheeps.addEventListener('input', function () {
    var value = Number(totalPriceBox.textContent)
    totalPriceBox.textContent = value + cheepCheeps.value * 11
})




