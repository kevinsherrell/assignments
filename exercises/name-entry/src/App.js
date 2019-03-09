import React, { Component } from 'react';
import Header from './Header'
import Controls from './Controls'
import Input from './Input'
import Names from './Names'

class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Input />
                <Controls />
                <Header />
                <Names />
            </div>
        )
    }
}

export default App