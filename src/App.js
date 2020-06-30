import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import TabMenu from "./components/TabMenu/TabMenu";
import RecommendedFriends from "./components/Friends/RecommendedFriends";

class App extends Component {
    constructor() {
        super();
        this.items = [
            {
                icon: "fas fa-home fa-3x",
                label: "Home",
            },
            {
                icon: "fas fa-gift fa-3x",
                label: "Gilf",
            },
            {
                icon: "fas fa-upload fa-3x",
                label: "Upload",
            },
            {
                icon: "fas fa-cog fa-3x",
                label: "Setting",
            },
        ];
        this.users = [
            {
                img: "https://picsum.photos/100",
                name: "Hippo",
            },
            {
                img: "https://picsum.photos/100",
                name: "Hippo",
            },
            {
                img: "https://picsum.photos/100",
                name: "Hippo",
            },
            {
                img: "https://picsum.photos/100",
                name: "Hippo",
            },
            {
                img: "https://picsum.photos/100",
                name: "Hippo",
            },
        ];
    }
    render() {
        return (
            <div className="App">
                <Header />
                <LoginForm email="abc@example.com" />
                <TabMenu items={this.items} />
                <RecommendedFriends users={this.users} />
            </div>
        );
    }
}

export default App;
