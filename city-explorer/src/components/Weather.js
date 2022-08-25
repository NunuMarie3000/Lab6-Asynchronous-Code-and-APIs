import React, { Component } from 'react'

import { Modal, Button } from 'react-bootstrap'

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
				<Modal show={this.props.isWeatherClicked} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.city}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.props.weather.data.description}<br/>{this.props.weather.data.date}
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
