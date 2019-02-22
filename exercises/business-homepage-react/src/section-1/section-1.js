import React from 'react'
import featuredImage from '../images/marioish.jpg'
import placeholder from '../images/placeholder.png'
import './section-1.css'
function sectionOne(){
    return (
        <div className="sectionOneBottomBorder">
            <div className="container mainSec1container">
                <section className="featuredProject">
                    <div className="container featuredProjectContainer">
                        <h4 className="featuredProjectHeader">Featured Project</h4>
                        <img src={featuredImage} alt="featuredImage" className="featuredImage"></img>
                        <div className="imageBottom"></div>
                        <h2 className="featuredHeadline"><a href="#">Righteous Rappings for Jesus: 2d6 Is Saved</a></h2>
                        <p className="featuredDescription">Nerdcore hip-hop duo 2d6 is ready to record their seventh album, featuring songs about Studio Ghibli, anime conventions, D&D, and more.</p>
                        <p className="author">By DJ Stuck Down A Mineshaft</p>
                    </div>
                </section>
                <section className="recommended">
                    <div className="container recommendedContainer">
                        <h4 className="recommendedHeader">Recommended</h4>
                        <div className="recommendedRow">
                            <div className="recommendedLeft"><img src={placeholder} alt="placeholderImage" className="placeHolder"></img></div>
                            <div className="recommendedMid">
                                <div className="recommendedTitleLink">
                                    <a href="#">OGarden Smart: Grow An Indoor Garden of 90 Fruits & Veggies</a>
                                </div>
                                <div className="recommendedFunded">
                                    <p>2,608% funded</p>
                                </div>
                                <div className="recommendedAuthor">
                                    <sub>By Pierre Nilbart</sub>
                                </div>
                            </div>
                            <div className="recommendedRight"><i className="far fa-heart"></i></div>
                        </div>
                        <div className="recommendedRow">
                            <div className="recommendedLeft"><img src={placeholder} alt="placeholderImage" className="placeHolder"></img></div>
                            <div className="recommendedMid">
                                <div className="recommendedTitleLink recommendedTitleLinkRowTwo">
                                    <a href="#">99% Chance of Magic</a>
                                </div>
                                <div className="recommendedFunded">
                                    <p>114% Funded</p>
                                </div>
                                <div className="recommendedAuthor">
                                    <sub>By Heartspark Press</sub>
                                </div>
                            </div>
                            <div className="recommendedRight"><i className="far fa-heart"></i></div>

                        </div>
                        <div className="recommendedRow">
                            <div className="recommendedLeft"><img src={placeholder} alt="placeholderImage" className="placeHolder"></img></div>
                            <div className="recommendedMid">
                                <div className="recommendedTitleLink recommendedTitleLinkRowThree">
                                    <a href="#">Make 100: Mini Knit Cacti</a>
                                </div>
                                <div className="recommendedFunded">
                                    <p>555% funded</p>
                                </div>
                                <div className="recommendedAuthor">
                                    <sub>By Brittany</sub>
                                </div>
                            </div>
                            <div className="recommendedRight"><i className="far fa-heart"></i></div>

                        </div>
                        <div className="moreProjects">
                            <a href="#">View More Projects</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default sectionOne;