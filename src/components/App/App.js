import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  state = { hasError: false };

  //Error Handling
  static getDerivedStateFromError(error) {
    console.error(error);
    return this.setState({ hasError: true });
  }

  renderApp() {
    return (
      <div>
        <h1>DanniBlog</h1>
      </div>
    );
  }

  render() {
    const { hasError } = this.state;
    return (
      <section className="App">
        {hasError && <p>Something went wrong</p>}
        {this.renderApp()}
      </section>
    );
  }
}
