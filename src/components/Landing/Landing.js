import React, { Component } from "react";
import { Link } from "react-router-dom";
import legoheads from "./legoheads.jpg";
import thankyou from "./thankyou.jpg";
import woodduck from "./woodduck.jpg";
import midPic from "./midPic.jpg";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <article>
        <h2>Welcome!</h2>
        <div className="midPic">
          <div className="borderBox">
            <div className="whiteBox">
              <span>Some content goes here</span>
            </div>
          </div>
        </div>
        <div className="picRoll">
          <img src={legoheads} alt="placeholder" />
          <img src={thankyou} alt="placeholder" />
          <img src={woodduck} alt="placeholder" />
        </div>
      </article>
    );
  }
}
