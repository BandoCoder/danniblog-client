import React, { Component } from "react";

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  //On login push to main whisper page
  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/admin/dash";
    history.push(destination);
  };

  render() {
    return (
      <div className="loginRoute">
        <section className="login">
          <h2>Login</h2>
        </section>
      </div>
    );
  }
}

export default LoginRoute;
