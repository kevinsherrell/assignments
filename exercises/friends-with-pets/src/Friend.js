import React from 'react'
import Pet from './Pet'
const Friend = props =>{
    console.log(props)
    const mappedPets = props.pets.map((pet, i)=>{
        return <Pet name={pet.name} breed={pet.breed} key={i}/>
    })
    console.log(mappedPets)
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <h3>These are my Pets: </h3>
            <div>
                {mappedPets}
            </div>
        </div>
    )
}

export default Friend