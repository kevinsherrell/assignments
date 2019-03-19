import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form action="/items" name='bountyForm'>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name='firstName' placeholder="Enter First Name"/>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name='lastName' placeholder='Enter Last Name'/>
                <label htmlFor="living">Living</label>
                <input type="checkbox" name='living'/>
                <label htmlFor="type">Type: </label>
                <input type="dropdown" name='type' placeholder='Please Input Type'/>
                </form>
            </div>
         );
    }
}
 
export default Form;