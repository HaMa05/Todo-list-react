import React, { Component } from "react";
import "./MenuIcon.css";

class MenuIcon extends Component {
  render() {
    return (
      <div className="MenuIcon">
        <div className="Icon">
          <div className="Icon-icon">
            <i className={this.props.icon}></i>
          </div>
          <div className="Icon-label">{this.props.label}</div>
        </div>
      </div>
    );
  }
}

export default MenuIcon;
