import React, { Component } from 'react';
import './MainSectionContent.css'


class MainSectionContent extends Component {
    constructor(props){
        super()
    }
    render() {
        return (

                <section className="mainSection">
                    <a href="#" className="mainSectionLink">
                        <h2 className="sectionHeader">{this.props.title}</h2>
                        <h3 className="sectionSubHeader">{this.props.subTitle}</h3>
                    </a>
                    <sub className="sectionPostedBy">Posted by <span>{this.props.author} </span>on {this.props.date}</sub>
                </section>
            
        );
    }
}

export default MainSectionContent;