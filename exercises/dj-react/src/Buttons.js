import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="gridContainer">
                <button onClick={this.props.changeButton1}>1</button>
                <button onClick={this.props.changeButton2}>2</button>
                <button onClick={this.props.changeButton3}>3</button>
                <button onClick={this.props.changeButton4}>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
            </div>
        )
    }
}

export default Buttons