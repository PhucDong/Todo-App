import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import TodoApp from "./components/TodoApp.js";
import WeatherApp from "./components/WeatherApp.js";

// import "./styles/App.css";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todoapp" component={TodoApp} />
          <Route path="/weatherapp" component={WeatherApp} />
        </Switch>
      </React.Fragment>
    )
  }
}