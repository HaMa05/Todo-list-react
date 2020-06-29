import React, { Component } from 'react'
import './Header.css'
import logo from './logoCodersX.png';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <header className="Header-2">
          <div className="Header-go-back">
            <a href="#">
              <i className="fas fa-long-arrow-alt-left"></i>
              <span>Go Back</span>
            </a>
          </div>
          <div className="Header-logo">
            <a href="#">
              <img alt="logo" src={logo}/>
            </a>
          </div>
          <div className="Header-sign-up">
            <a href="#" className="btn-sign-up">
              Sign Up
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;