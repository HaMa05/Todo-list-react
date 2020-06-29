import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <h1>Sign in</h1>
        <form action="#" className="form">
          <div className="LoginForm-form">
            <label>Username</label>
            <br />
            <input type="text" name="username" placeholder="Bui Van Ha"></input>
          </div>
          <div className="LoginForm-form">
            <label >Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="********"
            ></input>
          </div>
          <div className="LoginForm-form">
            <label >Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder={this.props.email}
            ></input>
          </div>
          <input type="submit" className="btn" value="Sign to Coders-x"></input>
          <br />
          <div className="check-validation">
            <input type="checkbox" name="keep" value="Keep"></input>
            <label >Keep me signed in</label>
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
