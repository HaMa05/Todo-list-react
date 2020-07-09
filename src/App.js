import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import TabMenu from "./components/TabMenu/TabMenu";
import RecommendedFriends from "./components/Friends/RecommendedFriends";
import Table from "./components/Table/Table";
import SearchBox from "./components/SearchBox/SearchBox";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import Modal from "./components/Modal/Modal";
import OpenModal from "./components/Modal/OpenModal";
const RED = -1;
const ORANGE = 0;
const GREEN = 1;

class App extends Component {
    constructor() {
        super();
        this.state = {
            isCurrentColor: RED,
        };
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
        this.infos = [
            {
                first: "Mark",
                last: "Otto",
                handle: "@mdo",
            },
            {
                first: "Mark",
                last: "Otto",
                handle: "@mdo",
            },
            {
                first: "Mark",
                last: "Otto",
                handle: "@mdo",
            },
            {
                first: "Mark",
                last: "Otto",
                handle: "@mdo",
            },
        ];

        // setInterval(() => {
        //     this.setState({
        //         isCurrentColor: this.getNextColor(this.state.isCurrentColor),
        //     });
        // }, 1000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        const { isCurrentColor } = this.state;
        return (
            <div className="App">
                {/* <Header />
                <LoginForm email="abc@example.com" />
                <TabMenu items={this.items} />
                <RecommendedFriends users={this.users} />
                <Table infos={this.infos} /> */}
                {/* <TrafficLight isCurrentColor={isCurrentColor} /> */}
                {/* <SearchBox /> */}
                <OpenModal/>
            </div>
        );
    }
}

export default App;
