// Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var computers = [];
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        computers.push(officeItems[i]);
        console.log(computers.length)
    }
}

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is" + " old enough to see Mad Max")
    }
    else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is" + " not old enough to see Mad Max")
    }
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" && peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is" + " old enough. HE'S good to see Mad Max Fury Road.")
  }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" && peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is" + " old enough. SHE's good to see Mad Max Fury Road.")
  }
  else{
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is" + " not old enough to see Mad Max.")
  }
}

