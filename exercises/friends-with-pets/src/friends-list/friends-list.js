import React from 'react'
import Friend from '..friend'



const FriendsList = props => {
    const mappedFriends = props.friends.map((person,i)=> <Friend name={person.name} age={person.age} pets={person.pets} />)
    return (
        <div>
            {mappedFriends}
        </div>
    )
}
export default FriendsList 
