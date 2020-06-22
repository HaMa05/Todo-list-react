import React, { Component } from "react";
import "./TabMenu.css";

class TabMenu extends Component {

    render() {
        return (
            <div className="TabMenu">
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

export default TabMenu;
