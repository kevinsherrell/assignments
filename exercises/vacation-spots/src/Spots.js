import React from 'react';


const Spots = (props) => {
    console.log(props)
    return (
        <div style={props.style}>
            <h2>{props.price <= 500 ? '$' : props.price > 500 && props.price < 1000 ? "$$" : props.price >= 1000 ? '$$$' : null} {props.place}</h2>
            <h3>PRICE: ${props.price}</h3>
            <p>Season: {props.timeToGo}</p>
        </div>
    )
}

export default Spots