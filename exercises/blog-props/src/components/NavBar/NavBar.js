import React, { Component } from 'react';
import './components/NavBar/NavBar.css'


class NavBar extends Component {
    render() {
        return (

            <nav>
                <ul>
                    <li>START BOOTSTRAP</li>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SAMPLE POST</li>
                    <li>CONTACT</li>
                </ul>
            </nav>

        );
    }
}

export default NavBar;