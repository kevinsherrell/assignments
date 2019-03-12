import React, { Component } from 'react';
import Menu from './Menu'

import logo from './newyorktimes.svg'
import signinIcon from './signinIcon.svg'
import searchIcon from './searchIcon.svg'
import hamburgerIcon from './hamburgerIcon.svg'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            menuToggle: false,
        }
    }
    render() {
        console.log(this.state)
       
        return (
            <>
            {this.state.menuToggle === true ? <Menu />: null}
            <header>
            
                {this.props.children}
            </header>
            </>
        )
    }
}

export default Header