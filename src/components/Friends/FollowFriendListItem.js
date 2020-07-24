import React, { Component } from "react";
import PropTypes from "prop-types"

class FollowFriendListItem extends Component {
    render() {
        return (
            <div className="Recommend-friends-item" key={this.props.index}>
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

FollowFriendListItem.PropTypes = {
    index: PropTypes.number,
    user: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string
    })
}

export default FollowFriendListItem;
