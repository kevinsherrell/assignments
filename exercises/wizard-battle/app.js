let wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"] 

function eachWizard(arr){
    wizards = wizards.forEach(function(wizard){
        console.log(wizard)
    })
}
console.log(eachWizard(wizards))