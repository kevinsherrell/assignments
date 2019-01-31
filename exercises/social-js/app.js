var user = {
    name: "Kevin Sherrell",
    age: 32,
    occupation: "software developer",
    birthdate: "10/28/1986",
    homeTown: {
        city: "Belleville",
        state: "Illinois",
        zip: "62223"
    },
    certifications: 
        {
            certName: "Microsoft Certified Technology Specialist",
            exam: "70-680",
            examDetails: {
                testingCenter: "Community College of Denver",
                testingDate: {
                    month: "January",
                    year: 2016
                }
            }
        },
        
    favoriteFoods: ["shrimp", "salmon", "steak", "brocolli", "brussel sprouts"],
    topThreeFoods: function () {
        return user.favoriteFoods.slice(0, 3)
    }
}
console.log(user)