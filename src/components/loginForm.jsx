import React, { Component } from "react";

//ByDefault HTML forms takes a trip to the server :)

class LoginForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
