// FORM --------
var addition = document.addition
var subtraction = document.subtraction
var multiplication = document.multiplication
var additionInputOne = document.getElementById('addition-input-1')
var additionInputTwo = document.getElementById('addition-input-2')
var subtractionInputOne = document.getElementById('subtraction-input-1')
var subtractionInputTwo = document.getElementById('subtraction-input-2')
var multiplicationInputOne = document.getElementById('multiplication-input-1')
var multiplicationInputTwo = document.getElementById('multiplication-input-2')
var additionButton = document.getElementById('addition-submit')
var subtractionButton = document.getElementById('subtraction-submit')
var multiplicationButton = document.getElementById('multiplication-submit')
var resultBox = document.getElementById('result-box')

addition.addEventListener('submit', function(event){
    event.preventDefault()
    var value = Number(additionInputOne.value) + Number(additionInputTwo.value)
    resultBox.textContent = value
})
subtraction.addEventListener('submit', function(event){
    event.preventDefault()
    var value = Number(subtractionInputOne.value) - Number(subtractionInputTwo.value)
    resultBox.textContent = value
})
multiplication.addEventListener('submit', function(event){
    event.preventDefault()
    var value = Number(multiplicationInputOne.value) * Number(multiplicationInputTwo.value)
    resultBox.textContent = value
})
// ---------------------------------------------------------------------------