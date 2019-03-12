import React, { Component } from 'react';

import logo from './newyorktimes.svg'
import signinIcon from './signinIcon.svg'
import searchIcon from './searchIcon.svg'
import hamburgerIcon from './hamburgerIcon.svg'

class NavTop extends Component {
    state = {}
    render() {

        return (
            <nav className="navTop">
                <div className='container'>
                    <div className='topMobileNavContainer'>
                        <div className='topMobileNavLeft'><input className='hamburgerIcon' type="image" src={hamburgerIcon} /></div>
                        <div className='topMobileNavCenter'><img className="logoMain" src={logo} alt="" /></div>
                        <div className='topMobileNavRight'><input className='signinIcon' type="image" src={signinIcon} /></div>
                    </div>
                </div>
            </nav>
        )



    }
}

export default NavTop;


