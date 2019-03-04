import React, { Component } from 'react';

import './styles.css'
import Buttons from './Buttons'
import Boxes from './Boxes'


class App extends Component {

    constructor() {
        super()
        this.state = {
            box1Color: "red",
            box1ColoTopr: "inherit",
            box1ColorBottom: "inherit",
            box2Color: "black",
            box2ColorTop: "inherit",
            box2ColorBottom: "inherit",
            box3Color: "green",
            box4Color: "grey",
        }

    }


    // revertColorButton2 = () =>{
    //     this.setState(prevState =>{
    //         return {
    //             backgroundColor: "inherit"
    //         }
    //     })
    // }


    changeColorButton1 = () => {
        this.setState(prevState => {
            return {
                box1Color: "white",
                box1ColorTop: "inherit",
                box1ColorBottom: "inherit",
                box2Color: "white",
                box2ColorTop: "inherit",
                box2ColorBottom: "inherit",
                box3Color: "white",
                box3ColorTop: "inherit",
                box3ColorBottom: "inherit",
                box4Color: "white",
                box4ColorTop: "inherit",
                box4ColorBottom: "inherit"
            }
        })
    }
    changeColorButton2 = () => {
        this.setState(prevState => {
            return {
                box1Color: "red",
                box1ColorTop: "purple",
                box1ColorBottom: "inherit",
                box2Color: "black",
                box2ColorTop: "purple",
                box2ColorBottom: "inherit",
                box3Color: "green",
                box3ColorTop: "inherit",
                box3ColorBottom: "inherit",
                box4Color: "grey",
                box4ColorTop: "inherit",
                box4ColorBotom: "inherit"
            }
        })
    }
    changeColorButton3 = () => {
        this.setState(prevState => {
            return {
                box1Color: "red",
                box1ColorTop: "inherit",
                box1ColorBottom: "inherit",
                box2Color: "black",
                box2ColorTop: "inherit",
                box2ColorBottom: "inherit",
                box3Color: "green",
                box3ColorTop: "inherit",
                box3ColorBottom: "blue",
                box4Color: "grey",
                box4ColorTop: "inherit",
                box4ColorBottom: "inherit"
            }
        })
    }
    changeColorButton4 = () => {
        this.setState(prevState => {
            return {
                box1Color: "red",
                box1ColorTop: "inherit",
                box1ColorBottom: "inherit",
                box2Color: "black",
                box2ColorTop: "inherit",
                box2ColorBottom: "inherit",
                box3Color: "green",
                box3ColorTop: "inherit",
                box3ColorBottom: "inherit",
                box4Color: "grey",
                box4ColorTop: "inherit",
                box4ColorBottom: "blue"
            }
        })
    }


    render() {
        // console.log(this)


        return (
            <main>
                <Boxes {...this.state} />
                <Buttons changeButton1={this.changeColorButton1} changeButton2={this.changeColorButton2} changeButton3={this.changeColorButton3} changeButton4={this.changeColorButton4} />
            </main>
        )
    }
}

export default App
