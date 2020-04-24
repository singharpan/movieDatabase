import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        <LoginForm />
      </main>
    );
  }
}

export default App;
