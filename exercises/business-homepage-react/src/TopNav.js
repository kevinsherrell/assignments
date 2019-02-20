import React from 'react'
import logo from './kickstarter.png'
function TopNav() {
    return (
            <header>
                <nav className="navOne">
                    <div className="navBarLeft">
                        <a href="#" className="navLink center">Explore</a>
                        <a href="#" className="navLink center">Start a project</a>
                    </div>
                    <div className="logo center">
                        <img src={logo} alt="kickstarter" className="logoImage"></img>
                    </div>
        
                    <div className="navBarRight">
                        <a href="#" className="navLink center">Sign in</a>
                        <a href="#" className="navLink center">Search<span><i className="fas fa-search"></i></span></a>
                    </div>
                </nav>
                <nav className="navTwo">
                    <div className="container">
                        <a href="#">Arts</a>
                        <a href="#">Comics & Illustration</a>
                        <a href="#">Design & Tech</a>
                        <a href="#">Film</a>
                        <a href="#">Food & Craft</a>
                        <a href="#">Games</a>
                        <a href="#">Music</a>
                        <a href="#">Publish</a><span className="arrow"><i className="fas fa-chevron-right"></i></span>
                    </div>
                </nav>
            </header>

        
    )
}
export default TopNav;