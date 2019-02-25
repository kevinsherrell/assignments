import React, { Component } from 'react';
class Social extends Component {
    constructor(props){
        super()
        console.log(props)
    }
    render() {
        return (
            <span className="fa-stack">
                <a href="#">
                    <i className={this.props.circleClass}></i>
                    <i className={this.props.logoClass}></i>
                </a>
            </span>
        );
    }
}

export default Social;

