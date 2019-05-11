import React, { Component } from "react";
import ArticleContainer from "./ArticleContainer";
import {withData} from './context/dataProvider'
class Results extends Component {
  state = {
    searchResults: this.props.searchResults
  };
  componentWillReceiveProps(nextProps){
    this.setState({
      searchResults: nextProps.searchResults
    })
    console.log(this.state)
  }
  render() {
    const mappedResults = this.props.searchResults.map((result, i) => {
      return <ArticleContainer {...result} key={result._id} />;
    });
    return(
      <React.Fragment>
      { mappedResults };
      </React.Fragment>
    )
  }
}

export default withData(Results);
