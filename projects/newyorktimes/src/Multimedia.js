import React, { Component } from 'react';
import Media from './Media'
class Multimedia extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props)
        return (
            <div className='mediaContainer'>
                {/* <div className="image" style={{ backgroundImage: `url(${this.props.url})` }}> */}
                <div className={
                    !this.props.multimedia.length ? 'noImage' : 'image'} 
                    style={{ backgroundImage: `url(${this.props.url})` }}>
                    <div></div>
                    <div className="articleInfo">
                        <p className='info'>{this.props.caption ? this.props.caption : this.props.abstract} <a className='fullStoryLink' href={`${this.props.short_url}`}>Full Story Here</a></p>
                        <sub className='byline'>{this.props.byline} <span className="articleDate">{this.props.created_date.slice(0, 9)}</span></sub>

                    </div>
                </div>
                {/* <sub className={this.props.caption}>{this.props.caption}</sub> */}
            </div>
        )
    }
}
export default Multimedia