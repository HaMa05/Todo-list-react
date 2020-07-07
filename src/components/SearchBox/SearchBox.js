import React, { Component } from "react";
import classNames from "classnames";
import "./SearchBox.css";

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            isFocused: true,
            character: "",
        };

        this.checkIsFocus = () => {
            this.setState({
                isFocused: false,
            });
        };

        // let element = document.getElementById("search");
        this.onChange = (e) => {
            this.setState({
                character: e.target.value,
            });
        };

        this.onBlur = () => {
            if(this.state.isFocused === false) {
                this.setState({
                    isFocused: true,
                });
            }
        };
    }
    render() {
        let borderColor = false;
        if (this.state.character.length > 10) {
            borderColor = true;
        }

        if (
            this.state.character.slice(0, 3) !== "090" &&
            this.state.character.length >= 3
        ) {
            borderColor = true;
        }

        const { isFocused } = this.state;
        return (
            <div className="SearchBox" >
                <from>
                    <div className="group-form">
                        <label for="input-success">
                            <i className="fas fa-check" />
                            <p>Input with success</p>
                        </label>
                        <input
                            type="text"
                            name="input-success"
                            id="input-success"
                            className="input-success"
                        />
                        <p>Help block with success</p>
                    </div>

                    <div
                        className={classNames(
                            "group-form",
                            { colorBorder: borderColor === false },
                            { changeColorBorder: borderColor }
                        )}
                    >
                        <input
                            onFocus={this.checkIsFocus}
                            // ={this.resetFocus}
                            type="text"
                            placeholder="Type something to search..."
                            className="input-search"
                            id="search"
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state.character}
                        />
                        <i
                            className={classNames({
                                "fas fa-search search": isFocused === true,
                            })}
                            id="search-icon"
                        />
                    </div>
                </from>
            </div>
        );
    }
}

export default SearchBox;
