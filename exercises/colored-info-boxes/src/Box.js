import React from 'react'
import './styles.css'

function Box(props){
    console.log(props.title)
    return (
        <div>
            <div 
            style={{backgroundColor: props.backgroundColor}}
            className="box" 
            backgroundColor={props.backgroundColor}>
            <h2>{props.title}</h2>
            <h4>{props.subTitle}</h4>
            <p>{props.information}</p>
            </div>
        </div>
    )
}

export default Box