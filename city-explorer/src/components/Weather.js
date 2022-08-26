import React, { Component } from 'react'

import { Card } from 'react-bootstrap'

export default class Weather extends Component {


	render() {
		return (
			<>
				<div style={{display: 'flex', flexDirection:'column'}}>
					<h2>Weather information for {this.props.city}</h2>
					<Card>
          <Card.Body>
            {this.props.weather.description}<br/>
						{this.props.weather.date}
          </Card.Body>
        	</Card>
				</div>
			</>
		)
	}
}
