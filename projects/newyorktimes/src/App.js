import React, { Component } from 'react';
import axios from 'axios'
import Article from './Article'
import Multimedia from './Multimedia'
import Media from './Media'

import './styles.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            frontPage: [],
            multimedia: []
        }
    }

    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=f9cdUfhLfBKNlN0arcby30dbeQ7LnXUI').then(response => {
            this.setState({
                frontPage: response.data.results,
            })
        }).catch(function (error) {
            console.log(error)
        }

        )
    }

  

    


    render() {
        // console.log(this.state.frontPage)
        

        const mappedArticle = this.state.frontPage.map((article, i)=>{
            return <Article {...article} key={article.abstract}/>
        })
       

        return (
            <div>
                {mappedArticle}
            </div>
        )
    }
}
export default App