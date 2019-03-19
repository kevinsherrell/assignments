import React, { Component } from 'react';
import axios from 'axios'

import BountyList from './BountyList'
class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         bounties: {}
    //     }
    // }
    state = {
        bounties: []
    }
    componentDidMount() {
        axios.get('/items').then((response) => {
            this.setState({
                bounties: response.data
            })
        })
    }
    render() {
        console.log(this.state.bounties)
        const mappedBounties = this.state.bounties.map((bounty, i) => {
            return <BountyList {...bounty} key={bounty._id}/>
        })
        return (
            <div>
                {mappedBounties}
            </div>
        );
    }
}

export default App;