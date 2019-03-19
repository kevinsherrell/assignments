import React, { Component } from 'react';
import styled from 'styled-components'

const FirstName = styled.p`
    color: green;
`
const LastName = styled.p`
    color: red;        
`
const Living = styled.p`
    color: brown;
`
const Bounty = styled.p`
    color: pink;
`
const Type = styled.p`
    color: orange;
`
class BountyList extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        const {firstName, lastName, living, bounty, type} = this.props
        return (  
            <div>
                <FirstName>First Name: {firstName}</FirstName>
                <LastName>Last Name: {lastName}</LastName>
                <Living>Living: {living.toString()}</Living>
                <Bounty>Bounty: {bounty}</Bounty>
                <Type>Type: {type}</Type>
            </div>
        );
    }
}
 
export default BountyList;