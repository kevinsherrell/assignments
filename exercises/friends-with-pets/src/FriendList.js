import React from 'react'
import Friend from './Friend'

const FriendsList = (props) =>{

    // console.log(props.friends)
    const mappedFriends = props.friends.map((friend, i)=> <Friend name={friend.name} age={friend.age} pets={friend.pets} key={i}/>)
    console.log(props.age)
    
    return (
        <div>
        {mappedFriends}
        </div>
    )
}

export default FriendsList