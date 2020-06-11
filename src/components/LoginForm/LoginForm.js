import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <h1>Sign in</h1>
        <form action="#" className="form">
          <div className="LoginForm-form">
            <label for="username">Username</label>
            <br />
            <input type="text" name="username" placeholder="Bui Van Ha"></input>
          </div>
          <div className="LoginForm-form">
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="********"
            ></input>
          </div>
          <input type="submit" className="btn" value="Sign to Coders-x"></input>
          <br />
          <div className="check-validation">
            <input type="checkbox" name="keep" value="Keep"></input>
            <label for="keep">Keep me signed in</label>
          </div>
        </form>
        <br />
        <div className="LoginForm-forgot">
          <div className="LoginForm-forgot-username up">
            <a href="#">Forgot username?</a>
          </div>
          <div className="LoginForm-forgot-password up">
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
