import React, { Component } from 'react';
import TopStory from './TopStory'
import {withData} from './context/dataProvider'
import axios from 'axios'

const apiKey = "f9cdUfhLfBKNlN0arcby30dbeQ7LnXUI";

class FrontPageNews extends Component {
    state = { 
        frontPageNews: []
     }
    componentDidMount() {
        axios
          .get(
            `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
          )
          .then(response => {
            this.setState({
              frontPageNews: response.data.results
            });
         
          })
          .catch(error => {
            console.log(error);
          });
      }
    
    render() { 
        console.log(this.state)
        const frontPage = {...this.state.frontPageNews}
        console.log(frontPage)
        const mappedFrontPage = this.state.frontPageNews.map((article, key) => {
           return <TopStory {...article}/>
          });
        // const frontPageMap = this.props.frontPageNews.map((article,i)=>{
        //     console.log(article)
        // })
        return ( 
            <React.Fragment>
                {mappedFrontPage}
            </React.Fragment>
         );
    }
}
 

export default withData(FrontPageNews);