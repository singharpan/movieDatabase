import React, { Component } from "react";

class LoginForm extends Component {
  //ByDefault HTML forms takes a trip to the server :)
  //this handlesubmit takes event object as a parameter & the event object have a method "preventDefault"
  //this prevent the form default behavior which is "submit to server" and "page reload"
  //will now call the server,save the changes to server and redirect user to next page.
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
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
