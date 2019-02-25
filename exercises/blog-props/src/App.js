import React, { Component } from 'react';

// CSS
import './reset.css'

class App extends Component {
    render() {
        return (
            <div>
                <header>
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
                    <div className="heroText container">
                        <h1>Clean Blog</h1>
                        <h3>A Blog Theme by Start Bootstrap</h3>
                    </div>
                </header>
                <main>
                    <div className="mainContainer">
                        <section className="mainSection">
                            <a href="#" className="mainSectionLink">
                                <h2 className="sectionHeader">Man must explore, and this is exporation at its greatest</h2>
                                <h3 className="sectionSubHeader">Problems look mighty small from 150 miles up</h3>
                            </a>

                            <sub className="sectionPostedBy">Posted by <span>Start Bootstrap </span>on September 24, 2019</sub>
                        </section>
                        <section className="mainSection">
                            <a href="#">
                                <h2 className="sectionHeader">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine</h2>
                            </a>

                            <sub className="sectionPostedBy">Posted by <span>Start Bootstrap </span>on September 24, 2019</sub>
                        </section>
                        <section className="mainSection">
                            <a href="#">
                                <h2 className="sectionHeader">Man must explore, and this is exporation at its greatest</h2>
                                <h3 className="sectionSubHeader">Problems look mighty small from 150 miles up</h3>
                            </a>

                            <sub className="sectionPostedBy">Posted by <span>Start Bootstrap </span>on September 24, 2019</sub>
                        </section>
                        <section className="mainSection">
                            <a href="#">
                                <h2 className="sectionHeader">Man must explore, and this is exporation at its greatest</h2>
                                <h3 className="sectionSubHeader">Problems look mighty small from 150 miles up</h3>
                            </a>

                            <sub className="sectionPostedBy">Posted by <span>Start Bootstrap </span>on September 24, 2019</sub>
                        </section>
                        <section className="olderPosts">
                            <button className="olderPostsButton">OLDER POSTS</button>
                        </section>
                    </div>

                    <footer>
                        <div className="footerContent">
                            <span className="fa-stack">
                                <a href="#">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#">
                                    <i className="fas fa-circle fa-stack-2x iconCircle"></i>
                                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                </a>
                            </span>
                            <p className="copyright">Copyright © Your Website 2019</p>
                        </div>
                    </footer>
                </main>
            </div>
        );
    }
}

export default App;

