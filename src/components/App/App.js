import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Blog from "../Blog/Blog";
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
        <section className="header">
          <Header />
        </section>
        <section className="content">
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route exact path={"/blog"} component={Blog} />
          </Switch>
        </section>
      </div>
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
