import React, { Component } from "react";
import classNames from "classnames";
import "./TrafficLight.css";

const RED = -1;
const ORANGE = 0;
const GREEN = 1;

class TrafficLight extends Component {
    render() {
        const { isCurrentColor } = this.props;
        return (
            <div className="trafficLight">
                <div
                    className={classNames("bulb", "red", {
                        active: isCurrentColor === RED,
                    })}
                ></div>
                <div
                    className={classNames("bulb", "orange", {
                        active: isCurrentColor === ORANGE,
                    })}
                ></div>
                <div
                    className={classNames("bulb", "green", {
                        active: isCurrentColor === GREEN,
                    })}
                ></div>
            </div>
        );
    }
}

export default TrafficLight;
