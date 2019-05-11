import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import DataProvider from './context/dataProvider'

ReactDOM.render(
  <Router>
      <DataProvider>
            <App />
      </DataProvider>
  </Router>,
  document.getElementById("root")
);
