import React, { Component } from "react";

class FollowFriendListItem extends Component {
    render() {
        return (
            <div className="Recommend-friends-item" key={this.props.key}>
                <div className="info">
                    <img className="info-content" src={this.props.user.img} />
                    <div className="info-content">
                        <a href="#">{this.props.user.name}</a> <br />
                        <span>Gợi ý cho bạn</span>
                    </div>
                </div>
                <div className="follow">
                    <a href="#"> Theo dõi </a>
                </div>
            </div>
        );
    }
}

export default FollowFriendListItem;
