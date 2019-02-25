import React, { Component } from 'react';



class Main extends Component {
    render() {
        return (
            <main>
                <div className="mainContainer">
                    {this.props.children}
                </div>
            </main>
        );
    }
}

export default Main;