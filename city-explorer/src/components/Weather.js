import React, { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

import Movies from './Movies'

export default class Weather extends Component {
	constructor(props) {
		super(props)

		this.state = {
			show: false,
		}
	}

	handleClose = () => {
		this.setState({ show: false })
		this.props.setWeatherFalse()
	}

	render() {
		return (
			<>
				{/* <Modal show={this.props.isWeatherClicked} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.city}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.props.weather.description}<br/>{this.props.weather.date}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal> */}

				<Modal show={this.state.show} fullscreen='true' onHide={() => this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal</Modal.Title>
					</Modal.Header>
					<Modal.Body>Modal body content</Modal.Body>
				</Modal>
			</>
		)
	}
}
