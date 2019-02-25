import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <p className="brand leftFloat"><a href="#" className="navLink">Start Bootstrap</a></p>
                    <ul className="navMenu rightFloat">
                        <li className="mobileButton"><button><strong>MENU</strong> <i className="fas fa-bars mobileHamburger"></i></button></li>
                        <li className="menuItem"><a href="#" className="navLink">HOME</a></li>
                        <li className="menuItem"><a href="#" className="navLink">ABOUT</a></li>
                        <li className="menuItem"><a href="#" className="navLink">SAMPLE POST</a></li>
                        <li className="menuItem"><a href="#" className="navLink">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;