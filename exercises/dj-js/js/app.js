
var mainBox = document.getElementById("main-box")
var box = document.getElementsByClassName("box")
// box turns blue on mouseover
mainBox.addEventListener("mouseover", function () {
    mainBox.style.backgroundColor = "blue"
})
// box turns blue when a specific key is pressed
window.addEventListener("keydown", function(event){
    // console.log(event.which)
    if(event.code === 'KeyB'){
        mainBox.style.backgroundColor = "blue"
    }
})
// box turns red when mouse button is pressed and held
mainBox.addEventListener("mousedown", function(){
  mainBox.style.backgroundColor = "red"
})
// box turns red when key a specific key is pressed
window.addEventListener("keydown", function(event){
    // console.log(event.which)
    if(event.code === 'KeyR'){
        mainBox.style.backgroundColor = "red"
    }
})
// box turns yellow when mouse button is released
mainBox.addEventListener("mouseup", function(){
    mainBox.style.backgroundColor = "yellow"
})
// box turns red when key a specific key is pressed
window.addEventListener("keydown", function(event){
    // console.log(event.which)
    if(event.code === 'KeyY'){
        mainBox.style.backgroundColor = "yellow"
    }
})
// box turns green when double clicked
mainBox.addEventListener("dblclick", function(){
    mainBox.style.backgroundColor = "green"
})
// box turns green when key a specific key is pressed
window.addEventListener("keydown", function(event){
    // console.log(event.which)
    if(event.code === 'KeyG'){
        mainBox.style.backgroundColor = "green"
    }
})
// box turns orange when the mouse wheel is scrolled
document.addEventListener("wheel", function(){
    mainBox.style.backgroundColor = "orange"
})
// box turns red when key a specific key is pressed
window.addEventListener("keydown", function(event){
    // console.log(event.which)
    if(event.code === 'KeyO'){
        mainBox.style.backgroundColor = "orange"
    }
})