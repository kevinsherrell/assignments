import React, { Component } from 'react';
import axios from 'axios';


import Header from './Header'
// import Menu from './Menu'
import Form from './Form'
import NavBottom from './NavBottom'

import ArticleContainer from './ArticleContainer'
import FrontPageNews from './FrontPageNews'
import Menu from './Menu'


import './styles.css'

import NavTop from './NavTop';

const apiKey = 'f9cdUfhLfBKNlN0arcby30dbeQ7LnXUI'

class App extends Component {

    constructor() {
        super()
        this.state = {
            frontPageNews: [],
            searchResults: [],
            menuToggle: false
        }
    }
    componentDidMount() {
        axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`).then(response => {
            this.setState({
                frontPageNews: response.data.results
            })
        }).catch(error => {
            console.log(error)
        })
    }
    handleSearch = (event) => {
        const searchInput = event.target.elements.articleSearch.value
        event.preventDefault()
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${apiKey}`).then(response => {
            this.setState({
                searchResults: response.data.response.docs
            })
        }).catch(error => {
            console.log(error)
        })
    }

    toggleMenu = (event) => {
        event.preventDefault()
        this.setState({
            menuToggle: true,
        })
    }

    render() {

        const mappedResults = this.state.searchResults.map((result, i) => {
            return <ArticleContainer {...result} key={result._id} />
        })
        const mappedFrontPage = this.state.frontPageNews.map((article, i) => {
            return <FrontPageNews {...article} key={article.url} />
        })
        console.log(this.state)
        return (
            <>
                    <Header openDropDown={this.toggleMenu}>
                        <NavTop />
                        <NavBottom />
                    </Header>

                    {mappedFrontPage}
                    {mappedResults}
            </>
        );
    }
}

export default App;