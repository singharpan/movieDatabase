import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };
  username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };
  handleChange2 = (e) => {
    const account = { ...this.state.account };
    account.password = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              ref={this.username}
              type="text"
              value={this.state.account.username}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              value={this.state.account.password}
              onChange={this.handleChange2}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
