import React, { Component } from "react";
import "./TabMenu.css";

class TabMenu extends Component {

    render() {
        return (
            <div className="TabMenu">
                <div className="Icon">
                    {this.props.items.map((item, index) => {
                        return(
                            <div key={index} className="Icon-n">
                                <div className="Icon-icon">
                                    <i className={item.icon}/>
                                </div>
                                <div className="Icon-label">{item.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TabMenu;
