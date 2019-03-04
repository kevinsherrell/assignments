import React from 'react';
import Spots from './Spots'

const App = () => {
    let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]
    let mappedVacationSpots = vacationSpots.map((spot, i)=>{
        return (
        <Spots 
        style={spot.timeToGo === "Fall" ? {backgroundColor: 'brown', color: 'white'} : spot.timeToGo === "Winter" ? {backgroundColor: 'red' ,color: 'white'}: spot.timeToGo === "Spring" ? {backgroundColor: 'orange', color: 'white'}: spot.timeToGo ==="Summer" ? {backgroundColor: 'green', color: 'white'}: null} 
        place={spot.place} 
        price={spot.price} 
        timeToGo={spot.timeToGo} 
        key={i}/>
        )
    })
    return (
        <div>
            {mappedVacationSpots}
        </div>
    ) 
}

export default App