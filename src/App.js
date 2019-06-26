import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import MainComponent from './game/mainController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent/>
      </div>
    );
  }
}

export default hot(module)(App);
