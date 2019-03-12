import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render() {
        // console.log(this.props)


        return (
            <form className='searchForm' onSubmit={this.props.searchForm}>
                <input type="text" name="articleSearch" placeholder="search"/>
                <button >GO</button>

            </form>
        );
    }
}

export default Form;
