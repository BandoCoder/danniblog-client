import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  nav1() {
    return (
      <nav className="topNav nav">
        <Link className="navLink" to="#">
          Home
        </Link>
        <Link className="navLink" to="/blog">
          Blog
        </Link>
        <Link className="navLink" to="#">
          About me
        </Link>
        <Link className="navLink" to="#">
          Lifestyle
        </Link>
        <Link className="navLink" to="#">
          Opportunity
        </Link>
        <Link className="navLink" to="#">
          Shop
        </Link>
        <Link className="navLink" to="#">
          Resources
        </Link>
      </nav>
    );
  }
  nav2() {
    return (
      <nav className="bottomNav nav">
        <Link className="navLink" to="#">
          Facebook
        </Link>
        <Link className="navLink" to="#">
          Instagram
        </Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <div className="navBar">
          <h1>Danni Lee</h1>
          <hr />
          {this.nav1()}
          <hr />
        </div>
      </header>
    );
  }
}
