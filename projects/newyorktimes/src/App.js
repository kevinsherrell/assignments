import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Header from "./Header";
// import Menu from './Menu'
import Form from "./Form";
import NavBottom from "./NavBottom";
import Main from "./Main";

import ArticleContainer from "./ArticleContainer";
import FrontPageNews from "./FrontPageNews";
import Menu from "./Menu";

import { withData } from "./context/dataProvider";
import "./styles.css";

import NavTop from "./NavTop";

const apiKey = "f9cdUfhLfBKNlN0arcby30dbeQ7LnXUI";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: false
    };
  }

  render() {
    return (
      <>
        <Header openDropDown={this.toggleMenu}>
          <NavTop />
          <NavBottom />
        </Header>
        <Form
          handleSearch={this.props.handleSearch}
          handleChange={this.props.handleChange}
          {...this.state}
        />
        <Main />
      </>
    );
  }
}

export default withData(withRouter(App));
