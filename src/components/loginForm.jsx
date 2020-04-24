import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  //when we work with properties of an object dynmically..we should use [] notation inset of . notation
  //for that we give a name property to input field and then use it
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={account.username}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              name="password"
              value={account.password}
              onChange={this.handleChange}
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
