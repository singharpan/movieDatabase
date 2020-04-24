import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is Required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is Required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  //Validation on form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} }); //state could not be null
    if (errors) return null;
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
