// let travel = document.travelForm
// let firstName = document.getElementById('firstName').value









let travel = document.travelForm
let firstName = document.travelForm.firstName
let lastName = document.travelForm.lastName
let age = document.travelForm.age
let gender = document.travelForm.gender

let dietary = document.travelForm.dietary
let travelLocation = document.travelForm.location


// travel.addEventListener('submit', function(event){
//     event.preventDefault()
//     alert(firstName.value)
// })


// This Solution Does Not Work....ASK WHY!!!

class Person {
    constructor(firstName, lastName, age, gender, dietary, travelLocation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.dietary = dietary;
        this.travelLocation = travelLocation;
    }
    personMessage() {
        return this
    }
}

travel.addEventListener('submit', function (event) {


    event.preventDefault()
    let person1 = new Person(firstName.value, lastName.value, age.value, gender.value, dietary, travelLocation.value)
    let checked = []
    for(i=0; i<person1.dietary.length; i++){
        if(person1.dietary[i].checked){
            checked.push(person1.dietary[i].value)
        }
    }
    alert("First Name: " + firstName.value + '\n' + "Last Name:  " + lastName.value + "\n" + "Age: " + age.value + "\nGender: " + gender.value + "\nDietary Restrictions: " + checked + "\n" + "Travel Location: " + travelLocation.value)
})