import React, { Component } from "react";

class LoginForm extends Component {
  //This will create a Ref object

  username = React.createRef();
  //const user=this.username.current.value//to get value
  //use refs only when very need
  componentDidMount() {
    this.username.current.focus();
  }
  //This is the example of refs use
  //ByDefault HTML forms takes a trip to the server :)
  //this handlesubmit takes event object as a parameter & the event object have a method "preventDefault"
  //this prevent the form default behavior which is "submit to server" and "page reload"
  //will now call the server,save the changes to server and redirect user to next page.
  //we don't use "document.getElementById("ID").value" to get value of input field..b'coz with that we will directly manipulate DOM,which is incorrect
  //input field is a DOM element and in order to use it first we create referernce of it(DOM Element)
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
            <input
              id="username"
              ref={this.username}
              type="text"
              className="form-control"
            />
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
