import React from 'react'
import friendsData from './friendsData.js'
import Friend from '../friend/friend'

const friendsComponents = friendsData.map(function(person){
    console.log(friendsComponents)
    return <Friend />
})
function FriendsList(){
    return <div>
        {friendsComponents}
    </div>
}
export default FriendsList