import React, { Component } from 'react';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import HeroText from './components/HeroText/HeroText'
import Main from './components/Main/Main'
import MainSectionContent from './components/Main/MainSectionContent/MainSectionContent'
import OlderPosts from './components/Main/OlderPosts/OlderPosts'
import Footer from './components/Footer/Footer'
import Social from './components/Footer/Social/Social'
// CSS //
import './general.css'
import './components/Header/Header.css'
import './components/NavBar/NavBar.css'
import './components/HeroText/HeroText.css'
import './components/Main/Main.css'
import './components/Main/MainSectionContent/MainSectionContent.css'
import './components/Footer/Footer.css'

// CSS

class App extends Component {
    render() {
        return (
            <div>
                <Header>
                    <NavBar />
                    <HeroText />
                </Header>
                <Main>
                    <MainSectionContent title="Man must explore, and this is exploration at its greatest" subTitle="Problems look mighty small from 150 miles up" author="Kevin Sherrell" date="September 24, 2019"/>
                    <MainSectionContent title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine. " subTitle="" author="John Shadow" date="September 18, 2019"/>
                    <MainSectionContent title="Science has not yet mastered prophecy" subTitle="We predict too much for the next year and yet far too little for the next ten. " author="Afrodamus" date="August 24, 2019"/>
                    <MainSectionContent title="Failure is not an option" subTitle="Many say expoloration is part of our destiny, but its actually our duty to future generations. " author="Big Boi" date="July 8, 2019"/>
                    <OlderPosts />
                </Main>
                <Footer>
                    <Social circleClass="fas fa-circle fa-stack-2x" logoClass="fab fa-twitter fa-stack-1x fa-inverse"/>
                    <Social circleClass="fas fa-circle fa-stack-2x" logoClass="fab fa-facebook-f fa-stack-1x fa-inverse"/>
                    <Social circleClass="fas fa-circle fa-stack-2x" logoClass="fab fa-github fa-stack-1x fa-inverse"/>
                    
                </Footer>
            </div>
        );
    }
}

export default App;

