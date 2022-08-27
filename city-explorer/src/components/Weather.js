import React, { Component } from 'react'

import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

export default class Weather extends Component {


	render() {
		return (
			<>
				<div className='weather-container'>
					<h5>Weather information for {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)}</h5>
					<Card>
						<CardHeader>Date & Time: <br/>{this.props.weather.date}</CardHeader>
						<Card.Body>
							{this.props.weather.description}
							<div style={{padding: '2rem 0', display:'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
							<i class="fa-solid fa-temperature-three-quarters fa-2x"></i>
							<i class="fa-solid fa-cloud fa-4x"></i>
							<i class="fa-solid fa-temperature-three-quarters fa-2x"></i>
							<i class="fa-solid fa-sun fa-4x"></i>
							<i class="fa-solid fa-temperature-three-quarters fa-2x"></i>
							<i class="fa-solid fa-cloud fa-4x"></i>
							<i class="fa-solid fa-temperature-three-quarters fa-2x"></i>
							</div>
						</Card.Body>
					</Card>
				</div>
			</>
		)
	}
}
