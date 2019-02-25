import React, { Component } from 'react';
import './components/Main/Main.css'
import MainSectionContent from './MainSectionContent/MainSectionContent'


class Main extends Component {
    render() { 
        return (
            <div>
                <MainSectionContent />
                <MainSectionContent />
                <MainSectionContent />
                <MainSectionContent />
            </div>
        );
    }
}
 
export default Main;