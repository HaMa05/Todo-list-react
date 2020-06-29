import React, { Component } from "react";

// import logo from './logo.svg';
import "./App.css";
// import TodoItem from './components/TodoItem';
import Header from "./components/header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import TabMenu from "./components/TabMenu/TabMenu";

class App extends Component {
    constructor() {
        super();
        this.items = [
            {
                icon: "fas fa-home fa-3x",
                label: "Home"
            },
            {
                icon: "fas fa-gift fa-3x",
                label: "Gilf"
            },
            {
                icon: "fas fa-upload fa-3x",
                label: "Upload"
            },
            {
                icon: "fas fa-cog fa-3x",
                label: "Setting"
            }
        ];
    }
    render() {
        return (
            <div className="App">
                <Header />
                <LoginForm email="abc@example.com" />
                <TabMenu items={this.items}/>
            </div>
        );
    }
}

export default App;