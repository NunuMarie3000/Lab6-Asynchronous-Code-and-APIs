import React, { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

export default class Static extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        show: false,
      }
    }

    handleClose = () =>{
        this.setState({show: false})
        this.props.closeModalFromCards();
    }

    render() {
    return (
        <>
        <Modal show={this.props.isClicked} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
         <Modal.Body>
         <img style={{width: '100%'}} alt='a map' src={this.props.src}/>
         </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>

        </>
    )
    }
}
