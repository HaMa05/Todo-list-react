import React, { Component } from "react";
import FollowFriendListItem from "./FollowFriendListItem";

class RecommendedFriends extends Component {
    render() {
        return (
            <div className="container-follow">
                <div className="Filter-friends">
                    <div className="Filter-friends-info">
                        <div className="Filter-friends-info-status">
                            <h3>Bài viết</h3>
                        </div>
                        <div className="Filter-friends-info-setting">
                            <div className="setting">
                                <i className="fas fa-cog" />
                                <span>Bộ lọc</span>
                            </div>
                            <div className="setting">
                                <i className="fas fa-cog" />
                                <span>Quản lý bài viết</span>
                            </div>
                        </div>
                    </div>
                    <div className="Filter-friends-option">
                        <div className="Filter-friends-option-left option">
                            <i className="fa fa-bars" />
                            <span>Xem theo danh sách</span>
                        </div>
                        <div className="Filter-friends-option-right option">
                            <i className="fa fa-th-large" />
                            <span>Xem theo danh sách</span>
                        </div>
                    </div>
                </div>

                <div className="Recommend-friends">
                    <div className="Recommend-friends-title">
                        <p>Gợi ý cho bạn</p>
                        <p>
                            <a href="#">Xem tất cả</a>
                        </p>
                    </div>
                    <div className="Recommend-friends-list">
                        {this.props.users.map((user, index) => {
                            return (
                                <FollowFriendListItem user={user} key={index} />
                            );
                        })}
                    </div>
                </div>
                <div className="create-status-user">
                    <div className="create-status-user-title">
                        <span>Tạo bài viết</span>
                    </div>
                    <div className="create-status-user-write">
                        <img src="https://picsum.photos/100" />
                        <input
                            type="text"
                            name="title"
                            className="write-title"
                            placeholder={`Anh ${this.props.users[0].name} ơi, anh đang nghĩ gì vậy?`}
                        />
                    </div>
                    <div className="create-status-user-expand">
                        <div className="expand-icon">
                            <a href="#">
                                <i className="fas fa-image" />
                                <span>Ảnh/Video</span>
                            </a>
                        </div>
                        <div className="expand-icon">
                            <a href="#">
                                <i className="fas fa-user-tag" />
                                <span>Gắn thẻ bạn bè</span>
                            </a>
                        </div>
                        <div className="expand-icon">
                            <a href="#">
                                <i className="fas fa-laugh" />
                                <span>Cảm xúc/...</span>
                            </a>
                        </div>
                        <div className="expand-icon dot">
                            <a href="#">
                                <span>...</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendedFriends;
