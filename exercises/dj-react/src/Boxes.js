import React, { Component } from 'react';

class Boxes extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="gridContainer">
                <div style={{ backgroundColor: this.props.box1Color }} className="boxOne">
                    <div style={{backgroundColor: this.props.box1ColorTop}}className="boxOneTop">
                        
                    </div>
                    <div style={{backgroundColor: this.props.box1ColorBottom}}className="boxOneBottom">

                    </div>
                </div>
                <div style={{ backgroundColor: this.props.box2Color }} className="boxTwo">
                    <div style={{backgroundColor: this.props.box2ColorTop}}className="boxTwoTop">

                    </div>
                    <div style={{backgroundColor: this.props.box2ColorBottom}}className="boxTwoBottom">

                    </div>
                </div>
                <div style={{ backgroundColor: this.props.box3Color }} className="boxThree">
                    <div style={{backgroundColor: this.props.box3ColorTop}}className="boxThreeTop"></div>
                    <div style={{backgroundColor: this.props.box3ColorBottom}}className="boxThreeBottom"></div>
                </div>
                <div style={{ backgroundColor: this.props.box4Color }} className="boxFour">
                        <div style={{backgroundColor: this.props.box4ColorTop}}className="boxFourTop">

                        </div>
                        <div style={{backgroundColor: this.props.box4ColorBottom}}className="boxFourBottom">

                        </div>
                </div>

            </div>
        )
    }
}

export default Boxes