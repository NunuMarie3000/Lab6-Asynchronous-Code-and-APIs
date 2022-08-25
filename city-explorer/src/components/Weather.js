import React, { Component } from 'react'

import { Modal, Button, Card, ListGroup } from 'react-bootstrap'

export default class Weather extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weather: '',
			show: false,
		}
	}

	handleClose = () => {
		this.setState({ show: false })
		this.props.closeModalFromCards();
	}

	render() {
		return (
			<>
				<button onClick={this.getForecast}>Click me</button>


				<Modal show={this.props.isWeatherClicked} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.weather && this.state.weather.map((obj) => {
							return <Card style={{ width: '6rem' }}>
								<ListGroup variant="flush">
									<ListGroup.Item>Day 1: {obj.data.dayOne}</ListGroup.Item>
									<ListGroup.Item>Day 2: {obj.data.dayTwo}</ListGroup.Item>
									<ListGroup.Item>Day 3: {obj.data.dayThree}</ListGroup.Item>
								</ListGroup>
							</Card>
						})}
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
