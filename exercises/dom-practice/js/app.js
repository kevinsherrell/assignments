var mainButton = document.getElementById("main-button")
var btn = document.getElementsByClassName("button")
mainButton.addEventListener("click", function () {
  if(btn.length <1){
      document.body.style.backgroundColor = "red"
  }else if(btn.length >= 1){
      document.body.style.backgroundColor = "green"
  }
})