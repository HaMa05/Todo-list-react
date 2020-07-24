import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    render() {
        return(
            <div className="Modal">
               <form>
                    <button onClick={this.props.onClose}>
                        <i className="fas fa-times times"/>
                    </button>
                    <div className="info">
                        <h1>This is a modal 1</h1>
                        <p className="content">{this.props.content}</p>
                    </div>
                    <div className="btn">
                        <button onClick={this.props.onClose}>Accept</button>
                        <button onClick={this.props.onClose}>Decline</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Modal;