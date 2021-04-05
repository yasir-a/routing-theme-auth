import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  static contextType = AuthContext;
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push("/");
    this.context.setIsLoggedIn(true);
  };

  render() {
    console.log(this.context.isLoggedIn);
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default withRouter(Login);
