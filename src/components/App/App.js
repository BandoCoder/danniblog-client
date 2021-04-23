import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Header from "../Header/Header";
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
      <section className="header">
        <Header />
      </section>
    );
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        {hasError && <p>Something went wrong</p>}
        {this.renderApp()}
      </div>
    );
  }
}
