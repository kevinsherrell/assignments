var form = document.getElementById("airline-form");
var submit = document.getElementById('submit');
// var query = document.querySelector;





function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    var vegan = document.getElementById("vegan").value
    var gluten = document.getElementById('gluten').value
    var paleo = document.getElementById('paleo').value

    if (form.elements['vegan'].checked) {
        diet.push(vegan);
    }
    if (form.elements['gluten'].checked) {
        diet.push(gluten);
    }
    if (form.elements['paleo'].checked) {
        diet.push(paleo);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener('click', function(event){
    event.preventDefault()
    formAlert()
})