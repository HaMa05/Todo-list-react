import React, { Component } from 'react'
import Modal from './Modal';
import './Modal.css';

class OpenModal extends Component {
    constructor() {
        super();
        this.state = {
            display: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        this.setState({display: !this.state.display});
    } 
    render() {
        return(
            <div>
                <button className="open-modal" onClick={this.handleOpenModal}>Open Modal</button>
                {this.state.display && <Modal display={this.state.display} onClose={this.handleOpenModal}/>}
            </div>
        );
    }
}

export default OpenModal;