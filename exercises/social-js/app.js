var user = {
    name: "john doe",
    age: 32,
    occupation: "software developer",
    birthdate: "10/28/1975",
    homeTown: {
        city: "louisville",
        state: "kentucky",
        zip: "40018"
    },
    certifications: 
        {
            certName: "Microsoft Certified Technology Specialist",
            exam: "70-680",
            examDetails: {
                testingCenter: "Louisville Community College",
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