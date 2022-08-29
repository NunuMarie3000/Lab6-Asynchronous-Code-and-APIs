import React, { Component } from 'react'

import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
const icons = ['fa-solid fa-cloud fa-4x', 'fa-solid fa-sun fa-4x', 'fa-solid fa-cloud fa-4x']

export default class Weather extends Component {
	render() {
		return (
			<>
				<div className='weather-container'>
					<h5 style={{fontFamily: 'Caveat, cursive', fontSize: '36px'}}><i className='fa-solid fa-temperature-three-quarters'></i> Seven Day Forecast for {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)} <i className='fa-solid fa-temperature-three-quarters'></i></h5>
					<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'1rem'}}>
						{this.props.weather.map(day => <Card style={{width: '16rem'}}>
							<CardHeader style={{fontFamily: 'Caveat, cursive', fontSize: '24px'}}>Date: {day.date}</CardHeader>
							<Card.Body style={{backgroundColor: 'rgb(255, 160, 104)'}}>
								{day.description}
								<div style={{paddingTop: '1rem', display:'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
								{icons.map(icon => <i style={{color: '#914236'}} className={icon}></i>)}
								</div>
							</Card.Body>
						</Card>)}
					</div>
				</div>
			</>
		)
	}
}
