var shopper = {
    firstName: "Kevin",
    lastName: "Sherrell",
    myAge: 32,
    birthState: "Mississippi",
    completeInfo: 
    function(){
        return "Hi, I am " + shopper.firstName + " " + shopper.lastName + ". " + "I am " + shopper.myAge + " " + "and I was born in " + shopper.birthState + "!";
    },
    groceryCart: ["tortillas", "beans", "rice", "chicken"]

}

console.log(shopper.completeInfo())