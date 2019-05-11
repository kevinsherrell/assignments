import React, { Component } from 'react';
class TopStory extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        const multimedia = {...this.props.multimedia[4]}
        return ( 
            <div className="frontPageNews">
        <div>
          <img
            className="frontPageImage"
            src={multimedia.url}
            alt=""
          />
          <sub className="imageCopyright container">
            {this.props.copyright}
          </sub>
        </div>

        <div className="container">
          <a href={this.props.url} target="blank">
            <h3 className="frontPageHeadline">{this.props.title}</h3>
            <p className="abstract">{this.props.abstract}</p>
            <sub>this.{this.props.byline}</sub>
          </a>
        </div>
      </div>
         );
    }
}
 
export default TopStory;